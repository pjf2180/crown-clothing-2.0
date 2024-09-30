"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { signUp } from "../../lib/actions";
import { AppButton } from "../button/Button";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export function SignUpForm() {
  const [errorMessage, dispatch] = useFormState(signUp, undefined);

  return (
    <div className="sign-up">
      <div className="h-[65px] mb-3">
        <h2 className="mb-3 text-2xl">I don't have an account</h2>
        <span>Sign up with your email and password</span>
      </div>
      <form action={dispatch}>
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
              id="email"
              type="text"
              name="email"
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
              className="peer block w-full h-[50px] border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={6}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full h-[50px] border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              placeholder="Confirm password"
              required
              minLength={6}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        {<p>{errorMessage}</p>}
        <SignInButton />
      </form>
    </div>
  );
}

function SignInButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <AppButton disabled={pending} type="submit" className="mt-4 w-full">
        Sign in
      </AppButton>
    </>
  );
}
