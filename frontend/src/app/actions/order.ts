"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createOrder(data: {
  userId: string;
  total: number;
  shippingAddress: string;
  items: Array<{
    productId: string;
    variantId: string;
    quantity: number;
    price: number;
  }>;
}) {
  try {
    const order = await prisma.order.create({
      data: {
        userId: data.userId,
        total: data.total,
        shippingAddress: data.shippingAddress,
        items: {
          create: data.items.map((item) => ({
            productId: item.productId,
            variantId: item.variantId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });
    
    revalidatePath("/account");
    return { success: true, order };
  } catch (error) {
    console.error("Error creating order:", error);
    return { success: false, error: "Failed to place order" };
  }
}

export async function getUserOrders(userId: string) {
  try {
    return await prisma.order.findMany({
      where: { userId },
      include: { 
        items: { 
          include: { 
            product: true 
          } 
        } 
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return [];
  }
}
