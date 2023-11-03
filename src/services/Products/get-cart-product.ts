import axios from 'axios';
import { Cart } from '@/utils/interface/Cart';
import { Product } from '@/utils/interface/Product';


export async function getCartProducts(cart: Cart): Promise<Product[]> {

  const productPromises = cart.itemList.map(async (cartItem) => {
    const productId = cartItem.productId;
    try {
      const response = await axios.get(`http://localhost:8080/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar informações para o produto com ID ${productId}:`, error);
      return null; 
    }
  });

  // Wait for all promises to complete
  const products = await Promise.all(productPromises);

  return products.filter((product) => product !== null);
}
