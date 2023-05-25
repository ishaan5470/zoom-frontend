import { configureStore } from '@reduxjs/toolkit';
import { posts } from "./slices/sspost"


export const store = configureStore({
    reducer: {
        [posts.reducerPath]: posts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(posts.middleware),
});