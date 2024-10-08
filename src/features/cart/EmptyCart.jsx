import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/products">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold md:text-lg">
        Your cart is still empty. Start adding some items!
      </p>
    </div>
  );
}

export default EmptyCart;
