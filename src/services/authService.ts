import type { LoginResponse, SignInFormData, SignUpFormData } from "../types/Authen";
import axiosClient from "../api/axiosClient";
import { API_ENDPOINTS } from "../api/endpoints";

export const authService = {
    signup: async (data: SignUpFormData) => {
        return await axiosClient.post<{ success: boolean, error: string }>(API_ENDPOINTS.AUTH.SIGNUP, data)
    },
    signin: async (data: SignInFormData) => {
        return await axiosClient.post<LoginResponse>(API_ENDPOINTS.AUTH.SIGNIN, data)
    },
}
