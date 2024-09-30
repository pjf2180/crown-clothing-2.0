import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
}

export function AppButton({
  label,
  children,
  ...buttonAttributes
}: ButtonProps) {
  const { className, disabled, ...passThroughProps } = buttonAttributes;
  return (
    <button
      type="button"
      className={clsx(
        `
        h-[50px] 
        w-[140px]
        tracking-[0.5px] 
        leading-[50px] 
        text-[15px] 
        uppercase 
        font-bold 
        cursor-pointer 
        justify-center 
        items-center 
        bg-white 
        text-black 
        border 
        border-black 
        dark:bg-black 
        dark:text-white 
        dark:border-white 
        px-1         
      `,
        {
          "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black":
            !disabled, 
          "opacity-50 cursor-default": disabled, 
        },
        className
      )}
      {...passThroughProps}
    >
      {children || label}
    </button>
  );
}
