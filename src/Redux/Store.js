import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterSlice";
import { brandsReducers } from "./BrandSlice";

export let Store = configureStore({
    reducer: {
        counter: counterReducer,
        brand: brandsReducers
    }
})