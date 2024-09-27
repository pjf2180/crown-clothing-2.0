import { CartItem, Item } from "@prisma/client";
import { CartItemModel } from "../../models/cartItem.models";
import { CartItemSyncDTO } from "../../models/cartItem.dtos";

const CART_API_URL = `${process.env["NEXT_PUBLIC_APP_BASE_URL"]}/api/cart`;
const CART_SYNC_API_URL = `${process.env["NEXT_PUBLIC_APP_BASE_URL"]}/api/cartSync`;

export async function getUserCart(): Promise<CartItemModel[]> {
  const response = await fetch(CART_API_URL);
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
  const response = await fetch(CART_API_URL, options);
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
  const response = await fetch(CART_API_URL, options);
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
  const response = await fetch(CART_API_URL, options);
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
    `${CART_SYNC_API_URL}?userEmail=${userEmail}`,
    options
  );
}
