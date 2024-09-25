import { CartItem, Item } from "@prisma/client";
import { CartItemModel } from "../../models/cartItem.models";

export async function getUserCart(userId: string): Promise<CartItemModel[]> {
  const response = await fetch(
    `http://localhost:3000/api/cart?userId=${userId}`
  );
  const data: (CartItem & { item: Item })[] = await response.json();
  return data.map(
    (x): CartItemModel => ({
      id: x.itemId,
      imageUrl: x.item.imageUrl,
      name: x.item.name,
      price: x.item.price,
      quantity: x.quantity,
    })
  );
}
export async function updateItemQuantityRequest(
  userId: string,
  productId: number,
  quantity: number
): Promise<void> {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, quantity }),
  };
  const response = await fetch(
    `http://localhost:3000/api/cart?userId=${userId}`,
    options
  );
  await response.json();
}

export async function deleteItemFromCartAction(
  userId: string,
  productId: number
): Promise<void> {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  };
  const response = await fetch(
    `http://localhost:3000/api/cart?userId=${userId}`,
    options
  );
  await response.json();
}

export async function postItemToCartAction(
  userId: string,
  productId: number
): Promise<void> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  };
  const response = await fetch(
    `http://localhost:3000/api/cart?userId=${userId}`,
    options
  );
  await response.json();
}
