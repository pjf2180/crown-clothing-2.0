"use client";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { loginAction } from "../../lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import React from "react";
import { useAppSelector } from "@/app/lib/store/hooks";
import { cartItemsSelector } from "@/app/lib/store/cart/cart.selectors";
import { AppButton } from "../button/Button";

export function LoginForm() {
  const [formState, formAction] = useFormState(loginAction, {
    errorMessage: undefined,
  });
  const { errorMessage } = formState;
  const cartItems = useAppSelector(cartItemsSelector);
  const cartItemsDTO = cartItems.map((x) => ({
    productId: x.id,
    quantity: x.quantity,
  }));

  return (
    <form action={formAction} className="space-y-3">
      <input name="cart" hidden readOnly value={JSON.stringify(cartItemsDTO)} />
      <div className="mb-3 text-2xl">

        <div className="h-[65px] mb-3">
          <h1 className={` mb-3 text-2xl`}>Login</h1>
        </div>

        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full h-[50px] border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="login-email"
                type="text"
                name="login-email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full h-[50px]  border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="login-password"
                type="password"
                name="login-password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        
      </div>
    </form>
  );
}
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <AppButton
      type="submit"
      disabled={pending}
      className="mt-4 w-full"
      aria-disabled={pending}
    >
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </AppButton>
  );
}
