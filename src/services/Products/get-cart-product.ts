import api from '../api';
import { Cart } from '@/types/Cart';
import { Product } from '@/types/Product';


export async function getCartProducts(cart: Cart): Promise<Product[]> {

  const productPromises = cart.itemList.map(async (cartItem) => {
    const productId = cartItem.productId;
    try {
      const response = await api.get(`/products/${productId}`);
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
