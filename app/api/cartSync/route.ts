import { NextResponse } from "next/server";
import prisma from "../../lib/prisma/client";
import { CartItem } from "@prisma/client";
import { CartItemSyncDTO } from "@/app/lib/models/cartItem.dtos";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const userEmail = searchParams.get("userEmail");
  

  if (!userEmail) {
    return NextResponse.json(
      { error: "User email is required" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();

    if (!body.items || !Array.isArray(body.items)) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    const { items }: { items: CartItemSyncDTO[] } = body;
    if (items.length === 0) {
      return NextResponse.json(
        { message: "Cart stored successfully" },
        { status: 200 }
      );
    }

    // Start transaction to handle deletion and creation safely
    await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.findFirst({
        where: { email: userEmail },
      });

      const userId = user?.id;
      if (!userId) {
        throw Error();
      }

      const existingCartItems = await prisma.cartItem.findMany({
        where: { userId },
      });

      const cartItemsByItemId: { [itemId: number]: CartItemSyncDTO } =
        existingCartItems.reduce(
          (acum: { [itemId: number]: CartItemSyncDTO }, item: CartItem) => {
            acum[item.itemId] = {
              productId: item.itemId,
              quantity: item.quantity,
            };
            return acum;
          },
          {}
        );

      items.forEach((cartItemDto: CartItemSyncDTO) => {
        const cartItemDTOExists = cartItemsByItemId[cartItemDto.productId];
        if (cartItemDTOExists) {
          cartItemsByItemId[cartItemDto.productId].quantity +=
            cartItemDto.quantity;
        } else {
          cartItemsByItemId[cartItemDto.productId] = cartItemDto;
        }
      });

      const mergedItems: CartItemSyncDTO[] = Object.values(cartItemsByItemId);

      // Delete all existing cart items for the user
      await prisma.cartItem.deleteMany({
        where: { userId },
      });

      // Create new cart items based on the merged data
      const updatedItems = mergedItems.map((item: CartItemSyncDTO) => ({
        userId,
        itemId: item.productId,
        quantity: item.quantity,
      }));

      await prisma.cartItem.createMany({
        data: updatedItems,
      });
    });

    return NextResponse.json(
      { message: "Cart stored successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error storing cart items:", error);
    return NextResponse.json(
      { error: "Error storing cart items" },
      { status: 500 }
    );
  }
}
