import React from "react";
import { LoginForm } from "../ui/loginForm/loginForm";
import { SignUpForm } from "../ui/signUpForm/signUpForm";

export default function LoginPage() {
  return (
    <div className="flex flex-wrap w-full items-start justify-center mt-[30px] mx-auto md:justify-between">
      <div className="p-4 max-w-[500px] min-w-[300px] md:w-full">
        <LoginForm />
      </div>
      <div className="p-4 max-w-[500px] min-w-[300px] md:w-full">
        <SignUpForm />
      </div>
    </div>
  );
}
