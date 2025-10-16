export const API_ENDPOINTS = {
    AUTH: {
        SIGNUP: "/users/signup",
        SIGNIN: "/auth/sign-in"
    },
    FILE: {
        UPLOAD: "uploads/file"
    },
    CATEGORY: {
        CREATE: "product/categories",
        LIST_CATEGORY: 'product/categories',
        REMOVE_CATEGORY: "product/:id/categories"
    },
    PRODUCTS: {
        LIST: '/product',
        CREATE: "/product",
        DELETE: "/product/:id",
    }
}