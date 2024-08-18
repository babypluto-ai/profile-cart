import { CircleMinus, CirclePlus } from "lucide-react";

function CartControls({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="mx-auto flex w-36 items-center justify-between rounded-3xl border border-red bg-red px-5 py-3 text-rose-50">
      <button
        className="flex items-center justify-center rounded-full p-1 hover:opacity-65"
        onClick={onDecrease}
      >
        <CircleMinus size={16} />
      </button>

      <span>{quantity}</span>

      <button
        className="flex items-center justify-center rounded-full p-1 hover:opacity-65"
        onClick={onIncrease}
      >
        <CirclePlus size={16} />
      </button>
    </div>
  );
}

export default CartControls;
