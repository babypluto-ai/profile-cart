import { CircleMinus, CirclePlus } from "lucide-react";

function CartControls({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="mx-auto flex w-24 items-center justify-between rounded-3xl border border-red bg-red px-2 py-1 text-xs text-rose-50 sm:w-28 sm:px-3 sm:py-2 sm:text-sm md:w-32 md:px-4 md:py-2.5 md:text-base lg:w-36 lg:px-5 lg:py-3">
      <button
        className="flex items-center justify-center rounded-full p-1 hover:opacity-65"
        onClick={onDecrease}
      >
        <CircleMinus size={12} className="sm:h-4 sm:w-4 md:h-5 md:w-5" />
      </button>

      <span>{quantity}</span>

      <button
        className="flex items-center justify-center rounded-full p-1 hover:opacity-65"
        onClick={onIncrease}
      >
        <CirclePlus size={12} className="sm:h-4 sm:w-4 md:h-5 md:w-5" />
      </button>
    </div>
  );
}

export default CartControls;
