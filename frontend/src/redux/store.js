import { configureStore } from '@reduxjs/toolkit';
import posts from "./slices/sspost"


export const store = configureStore({
    reducer: {
        sspost: posts

    }
})