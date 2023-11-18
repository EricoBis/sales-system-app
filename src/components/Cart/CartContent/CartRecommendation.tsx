import ProductCard from "@/components/Card/Product/ProductCard";
import { getProducts } from "@/services/Products/get-all-products";
import { Product } from "@/utils/types/Product";
import React from "react";


export default async function CartRecommendation() {

  const chooseRandomProducts = (products: Product[], n: number): Product[] => {
    const result: Product[] = [];
    if(!products) return result;
  
    const arrayClone = [...products];
  
    for (let i = 0; i < n && arrayClone.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * arrayClone.length);
      const chosenProduct = arrayClone.splice(randomIndex, 1)[0];
      result.push(chosenProduct);
    }
  
    return result;
  };
  
  const products = await getProducts();
  const randomProducts = chooseRandomProducts(products, 6);

  return (
    <>
      <h1 className="font-bold mb-5">Você vai adorar</h1>
      <div className="gap-8 grid sm:grid-cols-cardlist">
        {products &&
          randomProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
