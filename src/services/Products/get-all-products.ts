import axios from 'axios';

export async function getProducts() {

    try {
        const response = await axios.get('http://localhost:8080/products');
        return response?.data || [];
    } catch (error) {
        console.error(error);
    }
}