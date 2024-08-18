import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "./CartItem";
import { getCart, clearCart } from "./cartSlice";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
import OrderConfirmationModal from "../order/OrderConfirmationModal";

function Cart() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const handleConfirmOrder = () => {
    setShowConfirmation(true);
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="m-auto max-w-4xl px-4 py-3">
      <LinkButton to="/products" className="text-sm text-rose-400">
        &larr; Back to products list
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <Button type="primary" onClick={handleConfirmOrder}>
          Confirm Order
        </Button>
        {showConfirmation && (
          <OrderConfirmationModal onClose={() => setShowConfirmation(false)} />
        )}
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
