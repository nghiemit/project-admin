import axiosClient from "../api/axiosClient";
import { API_ENDPOINTS } from "../api/endpoints";
import type { CreateProductRq, FilterProduct } from "../types/product/productType";
// import type { CreateProductRes, CreateProductRq, FilterProduct, ProductResponse } from "../types/product/productType";





export const productServices = {
    createProduct: async (data: CreateProductRq) => {
        return await axiosClient.post(API_ENDPOINTS.PRODUCTS.CREATE, data);
    },
    getListProducts: async (filterProduct: FilterProduct) => {
        return await axiosClient.get(API_ENDPOINTS.PRODUCTS.LIST,{
            params:filterProduct
        })
    }
};