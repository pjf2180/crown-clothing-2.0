"use client";
import Link from "next/link";
import { CartDropdown } from "../cart-dropdown/cart-dropdown";
import { useState } from "react";
import { useAppSelector } from "@/app/lib/store/hooks";
import { cartItemsSelector } from "@/app/lib/store/cart/cart.selectors";
import { AppLogo } from "./appLogo.component";
import { CartIcon } from "./cartIcon.component";
import { useSession, signOut } from "next-auth/react";

export function Header() {
  const [hiddenCart, setHiddenCart] = useState(true);
  const cartItems = useAppSelector(cartItemsSelector);
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";
  return (
    <div className="h-[60px] w-full relative flex items-center justify-between md:mx-0 md:py-0">
      <Link className="px-4 py-2 cursor-pointer" href="/">
        <AppLogo />
      </Link>
      <div className="h-full flex items-center justify-end">
        <Link className="px-4 py-2 cursor-pointer" href="/shop">
          Shop
        </Link>
        {isLoggedIn ? (
          <form action={() => signOut()}>
            <button className="px-4 py-2 cursor-pointer" type="submit">
              Sign out
            </button>
          </form>
        ) : (
          <Link className="px-4 py-2 cursor-pointer" href="/login">
            Sign In
          </Link>
        )}
        <CartIcon
          quantity={cartItems.length}
          toggleCartHidden={() => {
            setHiddenCart((x) => !x);
          }}
        ></CartIcon>
      </div>
      {hiddenCart ? null : (
        <CartDropdown
          cartItems={cartItems}
          onClickOutside={() => setHiddenCart(true)}
        />
      )}
    </div>
  );
}
