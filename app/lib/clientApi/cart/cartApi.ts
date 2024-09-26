import { CartItem, Item } from "@prisma/client";
import { CartItemModel } from "../../models/cartItem.models";
import { CartItemSyncDTO } from "../../models/cartItem.dtos";

export async function getUserCart(): Promise<CartItemModel[]> {
  const response = await fetch(`http://localhost:3000/api/cart`);
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
  const response = await fetch(`http://localhost:3000/api/cart`, options);
  await response.json();
}

export async function deleteItemFromCartAction(
  productId: number
): Promise<void> {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  };
  const response = await fetch(`http://localhost:3000/api/cart`, options);
  await response.json();
}

export async function postItemToCartAction(productId: number): Promise<void> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  };
  const response = await fetch(`http://localhost:3000/api/cart`, options);
  await response.json();
}

export async function syncCartItemsRequest(
  userEmail: string,
  cartItems: CartItemSyncDTO[]
): Promise<void> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items: cartItems }),
  };
  await fetch(
    `http://localhost:3000/api/cartSync?userEmail=${userEmail}`,
    options
  );
}
