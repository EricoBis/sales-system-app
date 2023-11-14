import { Cart } from '@/types/Cart';
import api from '../api';
import { useSession } from 'next-auth/react';

export async function createBudget(cart: Cart) {

    const { data: session } = useSession();

    await api
        .post("/budgets", {
            "clientId": session?.user.id,
            "itemList": cart.itemList
        },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": session?.user.token
                },
            }
        ).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
}