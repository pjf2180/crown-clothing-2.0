import { ShoppingIcon } from "./shoppingIcon.component";

export interface CartIconProps {
  quantity: number;
  toggleCartHidden: Function;
}
export function CartIcon({ quantity, toggleCartHidden }: CartIconProps) {
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
