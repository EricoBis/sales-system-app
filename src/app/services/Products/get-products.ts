import axios from 'axios';

export async function getProducts() {

    return axios.get('http://localhost:8080/products')
        .then(response => {
            return response?.data || [];
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}