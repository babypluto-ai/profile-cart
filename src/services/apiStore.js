const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw Error("Failed to get products");

  const data = await res.json();
  return data;
}
