import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./item-slice";

const store = configureStore({
    reducer: {
        item: itemReducer,
    },
});

export default store;
