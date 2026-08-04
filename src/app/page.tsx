import { ProductGrid } from "../components/product-grid";
import { products } from "../data/products";

export default function HomePage() {
  return <ProductGrid products={products} />;
}
