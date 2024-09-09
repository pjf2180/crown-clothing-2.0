import { CartItemModel } from "@/app/lib/models/cartItem.models";

export interface CheckoutItemProps {
  item: CartItemModel;
  addItem: Function;
  removeItem: Function;
  clearCartItem: Function;
}
export function CheckoutItem({
  item,
  addItem,
  removeItem,
  clearCartItem,
}: CheckoutItemProps) {
  const { imageUrl, name, quantity, price, id } = item;
  return (
    <div className="w-full min-h-[100px] border-b border-darkgrey py-[15px] text-[20px] flex items-center">
      <span></span>
      <div className="w-[23%] pr-4">
        <img className="w-full h-full" src={imageUrl} alt="item" />
      </div>
      <span className="w-[23%]">{name}</span>
      <span className="w-[23%] flex items-center">
        <div className="cursor-pointer" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="py-0 px-2">{quantity}</span>
        <div className="cursor-pointer" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="w-[23%]">{price}</span>
      <div className="pl-3 cursor-pointer" onClick={() => clearCartItem(id)}>
        &#10005;
      </div>
    </div>
  );
}
