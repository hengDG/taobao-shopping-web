import { ProductGrid } from "@/components/product-grid";
import { products } from "@/data/products"; 
export default function ProductsPage() {
  return (
    <ProductGrid products={products} />
  );
}
