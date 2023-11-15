import api from '../api';
import { AxiosResponse } from 'axios';
import { Budget } from '@/types/Budget';
import { User } from '@/types/User';

export async function getBudget(orderId: number, user: User): Promise<Budget> {

    const response = await api
        .get(`/budgets/${orderId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": user.token
                },
            }
        ).catch(function (error) {
            console.log(error);
        }) as AxiosResponse

    return response.data as Budget;
}

