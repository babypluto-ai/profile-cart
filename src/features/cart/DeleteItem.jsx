import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { Trash2 } from "lucide-react";

function DeleteItem({ itemId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(itemId))}>
      <Trash2 size={16} />
    </Button>
  );
}

export default DeleteItem;
