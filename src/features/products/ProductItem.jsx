import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";

import {
  addItem,
  getCurrentQuantityById,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../cart/cartSlice";
import { formatCurrency, capitalize } from "../../utils/helpers";
import DeleteItem from "../cart/DeleteItem";
import Button from "../../ui/Button";
import CartControls from "../cart/CartControls";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    category,
    image,
    rating: { rate, count },
  } = product;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      id,
      title,
      price,
      image,
      quantity: 1,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={`h-48 w-full rounded-xl object-cover mix-blend-multiply ${isInCart ? "border-2 border-red" : ""}`}
        />
        <div className="absolute bottom-0 left-0 right-0 flex translate-y-1/2 transform justify-center">
          {isInCart ? (
            <CartControls
              quantity={currentQuantity}
              onDecrease={() => dispatch(decreaseItemQuantity(id))}
              onIncrease={() => dispatch(increaseItemQuantity(id))}
            />
          ) : (
            <Button
              onClick={handleAddToCart}
              className="flex items-center gap-1 rounded-3xl border border-rose-400 bg-rose-50 px-2 py-1 text-xs hover:border-red hover:text-red sm:gap-2 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2.5 md:text-base lg:px-5 lg:py-3"
            >
              <ShoppingCart className="h-3 w-3 text-red sm:h-4 sm:w-4 md:h-5 md:w-5" />
              <span>Add to cart</span>
            </Button>
          )}
        </div>
      </div>

      <div className="p-4 pt-8">
        <h2 className="truncate text-base font-semibold text-rose-900 sm:text-lg">
          {title}
        </h2>
        <span className="mt-2 text-xs text-rose-500 sm:text-sm">
          {capitalize(category)}
        </span>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="mt-2 text-base font-bold text-red sm:text-lg">
              {formatCurrency(price)}
            </p>
            <p className="mt-1 text-xs text-rose-900 sm:text-sm">
              <span className="font-semibold text-rose-900">{rate}</span> (
              {count} reviews)
            </p>
          </div>
          {isInCart && (
            <div className="flex-shrink-0 self-center">
              <DeleteItem itemId={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
