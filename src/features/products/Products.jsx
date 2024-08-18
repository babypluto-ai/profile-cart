import { useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem";
import { getProducts } from "../../services/apiStore";

function Products() {
  const products = useLoaderData();

  return (
    <>
      <h1 className="mt-6 px-4 text-xl font-semibold text-rose-900 sm:text-2xl md:text-3xl lg:text-4xl">
        Products
      </h1>
      <ul className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Products;
