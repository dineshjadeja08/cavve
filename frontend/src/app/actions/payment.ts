"use server";

import Razorpay from "razorpay";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

export async function createRazorpayOrder(amount: number) {
  try {
    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    return { success: true, order };
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    return { success: false, error: "Failed to initiate payment" };
  }
}

export async function verifyPayment(data: {
  orderId: string;
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Update payment status in DB
      await prisma.payment.create({
        data: {
          orderId: data.orderId,
          provider: "razorpay",
          providerPaymentId: razorpay_payment_id,
          amount: 0, // Should be fetched or passed correctly
          status: "COMPLETED",
        },
      });

      await prisma.order.update({
        where: { id: data.orderId },
        data: { status: "PROCESSING" },
      });

      return { success: true };
    } else {
      return { success: false, error: "Invalid signature" };
    }
  } catch (error) {
    console.error("Payment Verification Error:", error);
    return { success: false, error: "Verification failed" };
  }
}
