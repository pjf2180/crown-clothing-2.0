"use client";
import Link from "next/link";
import { CartDropdown } from "../cart-dropdown/cart-dropdown";
import { useState } from "react";
function ShoppingIcon() {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 407.453 407.453"
      enableBackground="new 0 0 407.453 407.453"
      xmlSpace="preserve"
      width={24}
      height={24}
    >
      <g>
        <path
          fill="#010002;"
          d="M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486
           c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"
        />
        <path
          fill="#010002;"
          d="M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243
           v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391
           c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386
           C375.191,103.891,371.557,100.258,367.062,100.258z"
        />
        <path
          fill="#010002;"
          d="M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0
           c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394
           c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274
           C274.461,131.163,278.095,134.796,282.59,134.796z"
        />
        <path
          fill="#010002;"
          d="M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907
           c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65
           c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"
        />
        <path
          fill="#010002;"
          d="M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129
           c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65
           c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}
export interface CartIconProps {
  quantity: number;
  toggleCartHidden: Function;
}
function CartIcon({ quantity, toggleCartHidden }: CartIconProps) {
  return (
    <div
      onClick={() => toggleCartHidden()}
      className="w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer"
    >
      <ShoppingIcon />
      <span className="absolute text-[10px] font-bold bottom-[12px]">
        {quantity}
      </span>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="50px"
      height="39px"
      viewBox="0 0 50 39"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Group</title>
      <desc>Created with Sketch.</desc>
      <g id="WiP" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard" transform="translate(-90.000000, -38.000000)">
          <g id="Group" transform="translate(90.000000, 38.000000)">
            <polygon
              id="Rectangle"
              fill="#808282"
              points="3 14 25 26.5 47 14 40.855176 39 9.08421785 39"
            ></polygon>
            <polygon
              id="Triangle"
              fillOpacity="0.262838724"
              fill="#101A1A"
              points="25 8 40 39 10 39"
            ></polygon>
            <circle id="Oval" fill="#5E6363" cx="2" cy="9" r="2"></circle>
            <circle id="Oval" fill="#5E6363" cx="25" cy="2" r="2"></circle>
            <circle id="Oval" fill="#5E6363" cx="48" cy="9" r="2"></circle>
          </g>
        </g>
      </g>
    </svg>
  );
}
export interface HeaderProps {
  currentUser: any;
  isAdmin: boolean;
}
const CART_ITEMS = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
    name: "Adidas Yeezy",
    quantity: 2,
    price: 230,
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
    name: "Adidas Yeezy",
    quantity: 2,
    price: 230,
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
    name: "Adidas Yeezy",
    quantity: 2,
    price: 230,
  },
];
export function Header({ currentUser, isAdmin }: HeaderProps) {
  const [hiddenCart, setHiddenCart] = useState(true);
  return (
    <div className="h-[60px] w-full relative flex items-center justify-between md:mx-0 md:py-0">
      <Link className="px-4 py-2 cursor-pointer" href="/">
        <Logo></Logo>
        {isAdmin ? <h5>ADMIN</h5> : null}
      </Link>
      <div className="h-full flex items-center justify-end">
        <Link className="px-4 py-2 cursor-pointer" href="/shop">
          Shop
        </Link>
        {currentUser ? (
          <Link className="px-4 py-2 cursor-pointer" href="/orders">
            Orders
          </Link>
        ) : null}
        {currentUser ? (
          <Link
            className="px-4 py-2 cursor-pointer"
            href="/"
            onClick={() => {}}
          >
            Sign out
          </Link>
        ) : (
          <Link className="px-4 py-2 cursor-pointer" href="/signIn">
            Sign In
          </Link>
        )}
        <CartIcon
          quantity={0}
          toggleCartHidden={() => {
            setHiddenCart((x) => !x);
          }}
        ></CartIcon>
      </div>
      {hiddenCart ? null : <CartDropdown cartItems={CART_ITEMS} />}
    </div>
  );
}
