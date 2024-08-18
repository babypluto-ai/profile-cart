import { useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { truncateWithEllipsis } from "../../utils/helpers";

function CartItem({ item }) {
  const { id, title, image, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="flex flex-col border-b border-gray-200 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center">
        <img
          src={image}
          alt={title}
          className="mr-4 h-16 w-16 rounded-md object-cover mix-blend-multiply"
        />
        <div>
          <h3 className="font-medium">{truncateWithEllipsis(title, 32)}</h3>
          <p className="text-sm text-gray-500">Quantity: {quantity}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between sm:mt-0">
        <p className="text-sm font-bold sm:mr-8 sm:text-base">
          {formatCurrency(totalPrice)}
        </p>
        <div className="flex items-center">
          <UpdateItemQuantity itemId={id} currentQuantity={currentQuantity} />
          <div className="ml-2">
            <DeleteItem itemId={id} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
