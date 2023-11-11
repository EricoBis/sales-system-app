import ProductCard from "../components/Card/ProductCard/ProductCard";
import { getProducts } from "../services/Products/get-all-products";
import { Product } from "../types/Product";

export default async function Home() {
  
  const products = await getProducts();

  return (
      <div className="gap-8 grid sm:grid-cols-cardlist">
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
  );
}
