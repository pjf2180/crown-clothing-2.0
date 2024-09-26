"use client";
import Link from "next/link";
import { CartDropdown } from "../cart-dropdown/cart-dropdown";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store/hooks";
import { cartItemsSelector } from "@/app/lib/store/cart/cart.selectors";
import { AppLogo } from "./appLogo.component";
import { CartIcon } from "./cartIcon.component";
import { useSession, signOut } from "next-auth/react";
import { FetchUserCartThunk } from "@/app/lib/store/cart/cart.thunks";
import { SetCartItemsAction } from "@/app/lib/store/cart/cart.actions";

export function Header() {
  const [hiddenCart, setHiddenCart] = useState(true);
  const cartItems = useAppSelector(cartItemsSelector);
  const { status, data } = useSession();
  const dispatch = useAppDispatch();

  const isLoggedIn = status === "authenticated";

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(FetchUserCartThunk(data.user?.id as string));
    }
  }, [isLoggedIn]);

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
        <form action={() => {dispatch(SetCartItemsAction([])); signOut();}}>
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
