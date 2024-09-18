import { CartItemModel } from "@/app/lib/models/cartItem.models";
import { CartItem } from "../cart-item/cart-item.component";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside/useClickOutside";

export interface CartDropdownProps {
  cartItems: CartItemModel[];
  onClickOutside: Function;
}
export function CartDropdown({ cartItems, onClickOutside }: CartDropdownProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, onClickOutside);
  return (
    <div
      ref={containerRef}
      className="w-[300px] absolute top-12 right-3 flex flex-col p-5 border border-solid border-black bg-white z-10"
    >
      <div className="h-[240px] flex flex-col overflow-scroll">
        {cartItems.map((cartItem: CartItemModel) => (
          <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
        ))}
        {cartItems.length === 0 ? (
          <span className="empty-message">No items inside your cart.</span>
        ) : null}
      </div>
      <button
        className="min-w-[165px] w-auto h-[50px] tracking-[0.5px] leading-[50px] px-[35px] text-[15px] uppercase font-bold cursor-pointer flex justify-center items-center bg-white text-black border border-black hover:bg-black hover:text-white hover:border-none"
        onClick={() => {
          router.push("/checkout");
          onClickOutside();
        }}
      >
        Checkout
      </button>
    </div>
  );
}
