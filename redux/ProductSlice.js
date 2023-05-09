import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    status: "idle",
    error: null,
};
const PRODUCT_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const response = await axios.get(PRODUCT_URL);
            return [...response.data];
        } catch (error) {
            return error.message;
        }
    },
);

const ProductSlide = createSlice({
    name: "product",
    initialState,
    extraReducers: (builer) => {
        builer.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success";
            state.products = action.payload;
        });
        builer.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.products = [];
            state.error = action.error.message;
        });
        builer.addCase(fetchProducts.pending, (state) => {
            state.status = "loading";
        });
    },
});

export const { addCartItem } = ProductSlide.actions;
const ProductReducer = ProductSlide.reducer;
export default ProductReducer;
