import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./imageSlice";


const store = configureStore({
    reducer: {
        products: imageSlice
        
    }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;