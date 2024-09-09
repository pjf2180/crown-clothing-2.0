import { CartItemModel } from "@/app/lib/models/cartItem.models";

export interface CartItemProps {
  cartItem: CartItemModel;
}
export function CartItem({ cartItem }: CartItemProps) {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="w-full flex h-[80px] mb-4">
      <img className="w-[30%]" src={imageUrl} alt="item" />
      <div className="w-[70%] flex flex-col items-start justify-center py-3 px-5">
        <span className="text-base">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
}

