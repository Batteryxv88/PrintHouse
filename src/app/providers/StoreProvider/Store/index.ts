import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./imageSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        products: imageSlice,
        productData: productSlice
    }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;