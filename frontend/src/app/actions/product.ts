"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    return await prisma.product.findMany({
      include: { variants: true },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  try {
    return await prisma.product.findUnique({
      where: { slug },
      include: { variants: true, reviews: { include: { user: true } } },
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getFeaturedProducts() {
  try {
    return await prisma.product.findMany({
      where: { isFeatured: true },
      take: 4,
      include: { variants: true },
    });
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

export async function createProduct(data: any) {
  try {
    const product = await prisma.product.create({
      data: {
        ...data,
        variants: {
          create: data.variants,
        },
      },
    });
    revalidatePath("/collections");
    return { success: true, product };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Failed to create product" };
  }
}
