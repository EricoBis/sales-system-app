import ProductCard from "../components/Card/ProductCard/ProductCard";
import { getProducts } from "../services/Products/get-products";
import { Product } from "../utils/interface/Product";

export default async function Home() {
  const products = await getProducts();

  console.log(products);

  return (
    <div className="px-20 py-20 ">
      <div className="gap-8 grid sm:grid-cols-cardlist">
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
