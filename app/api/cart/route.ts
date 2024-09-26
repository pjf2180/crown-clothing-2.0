import { NextResponse } from "next/server";
import prisma from "../../lib/prisma/client";
import { auth } from "@/auth";

export async function GET(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "User not authorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: {
        item: true, // Include related item details
      },
    });

    return NextResponse.json(cartItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return NextResponse.json(
      { error: "Error fetching cart items" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "User not authorized" }, { status: 401 });
  }
  const userId = session.user?.id as string;

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // Parse the request body
    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Check if the item exists
    const item = await prisma.item.findUnique({
      where: { id: parseInt(productId) },
    });

    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Check if the user already has the item in their cart
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        userId,
        itemId: item.id,
      },
    });

    if (existingCartItem) {
      // Update the quantity if the item already exists in the cart
      const updatedCartItem = await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + 1 },
      });

      return NextResponse.json(updatedCartItem, { status: 200 });
    } else {
      // Add new cart item if it doesn't exist
      const newCartItem = await prisma.cartItem.create({
        data: {
          userId,
          itemId: item.id,
          quantity: 1,
        },
      });

      return NextResponse.json(newCartItem, { status: 201 });
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return NextResponse.json(
      { error: "Error adding item to cart" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "User not authorized" }, { status: 401 });
  }
  const userId = session.user?.id as string;

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // Parse the request body
    const { productId, quantity } = await request.json();

    if (!productId || quantity === undefined) {
      return NextResponse.json(
        { error: "Product ID and quantity are required" },
        { status: 400 }
      );
    }

    // Check if the item exists
    const item = await prisma.item.findUnique({
      where: { id: parseInt(productId) },
    });

    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Check if the user has the item in their cart
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        userId,
        itemId: item.id,
      },
    });

    if (!existingCartItem) {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }

    // Update the quantity of the existing cart item
    const updatedCartItem = await prisma.cartItem.update({
      where: { id: existingCartItem.id },
      data: { quantity },
    });

    return NextResponse.json(updatedCartItem, { status: 200 });
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    return NextResponse.json(
      { error: "Error updating cart item quantity" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "User not authorized" }, { status: 401 });
  }
  const userId = session.user?.id as string;

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // Parse the request body
    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Check if the item exists in the cart
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        userId,
        itemId: parseInt(productId),
      },
    });

    if (!existingCartItem) {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }

    // Delete the cart item
    await prisma.cartItem.delete({
      where: { id: existingCartItem.id },
    });

    return NextResponse.json(
      { message: "Item removed from cart" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return NextResponse.json(
      { error: "Error removing item from cart" },
      { status: 500 }
    );
  }
}
