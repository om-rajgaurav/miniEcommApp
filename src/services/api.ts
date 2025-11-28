import axiosInstance from './axiosInstance';
import { Product } from '../types/types';

export const productApi = {
    getAllProducts: async (): Promise<Product[]> => {
        const response = await axiosInstance.get<Product[]>('/products');
        return response.data;
    },
};
