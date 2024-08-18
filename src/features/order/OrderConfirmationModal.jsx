import { useSelector, useDispatch } from "react-redux";
import { getTotalCartPrice, clearCart } from "../cart/cartSlice";
import { formatCurrency, truncateWithEllipsis } from "../../utils/helpers";

const OrderConfirmationModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const handleStartNewOrder = () => {
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 text-sm">
      <div className="flex max-h-[90vh] w-full max-w-[90vw] flex-col rounded-lg bg-rose-50 p-4 sm:max-h-[80vh] sm:max-w-md sm:p-6 md:max-w-lg lg:max-w-xl">
        <div className="mb-4 flex items-center">
          <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green text-white">
            &#10003;
          </div>
          <h2 className="text-lg font-bold text-rose-900 sm:text-xl">
            Order Confirmed
          </h2>
          <div
            onClick={onClose}
            className="ml-auto cursor-pointer text-2xl text-rose-900"
          >
            &times;
          </div>
        </div>
        <p className="mb-4 text-xs text-rose-500 sm:mb-6 sm:text-sm">
          Order confirmed! 🎉 Thank you for shopping with us.
        </p>
        <div className="mb-4 flex-grow overflow-y-auto sm:mb-6">
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mr-3 h-10 w-10 object-cover mix-blend-multiply sm:h-12 sm:w-12"
                  />
                  <div>
                    <p className="text-xs text-rose-900 sm:text-sm">
                      {truncateWithEllipsis(item.title, 24)}
                    </p>
                    <span className="text-xs text-rose-400 sm:text-sm">
                      {item.quantity}x @ {formatCurrency(item.price)}
                    </span>
                  </div>
                </div>
                <p className="ml-2 text-xs font-bold text-rose-900 sm:text-sm">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 flex justify-between font-bold sm:mb-6">
          <span className="text-sm text-rose-900 sm:text-base">
            Order Total
          </span>
          <span className="text-sm text-rose-900 sm:text-base">
            {formatCurrency(totalCartPrice)}
          </span>
        </div>
        <button
          onClick={handleStartNewOrder}
          className="w-full rounded bg-red py-2 text-sm text-white transition-colors hover:bg-red/90 sm:py-3 sm:text-base"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
