import { CartItemModel } from "../lib/models/cartItem.models";
import { CheckoutItems } from "./checkoutItems";

export default async function CheckoutPage() {
  return (
    <div>
      <div className="w-full py-[10px] flex justify-between border-b border-darkgrey">
        <div className="capitalize flex-1 flex justify-center first:justify-start last:justify-end">
          <span>Product</span>
        </div>
        <div className="capitalize flex-1 flex justify-center first:justify-start last:justify-end">
          <span>Description</span>
        </div>
        <div className="capitalize flex-1 flex justify-center first:justify-start last:justify-end">
          <span>Quantity</span>
        </div>
        <div className="capitalize flex-1 flex justify-center first:justify-start last:justify-end">
          <span>Price</span>
        </div>
        <div className="capitalize flex-1 flex justify-center first:justify-start last:justify-end">
          <span>Remove</span>
        </div>
      </div>
      <CheckoutItems/>
      
      <div className="text-red-500 text-center mt-[40px] mb-4">
        *Please use the following credit card for testing purposes* <br />
        4242 4242 4242 4242 - Exp: 01/20 - cvv:123
      </div>
      {/* <StripeButton className='stripe-btn' price={cartTotal} items={cartItems}/> */}
    </div>
  );
}

function calculateCartTotal(cart: CartItemModel[]) {
  return cart.reduce((acum, current) => {
    return acum + current.price * current.quantity;
  }, 0);
}
