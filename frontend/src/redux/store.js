import { configureStore } from '@reduxjs/toolkit';
import { posts } from "./slices/sspost"
import { login } from './slices/login';
import { setupListeners } from '@reduxjs/toolkit/dist/query';



export const store = configureStore({
    reducer: {
        [posts.reducerPath]: posts.reducer,
        [login.reducerPath]: login.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([posts.middleware,login.middleware]),
});

setupListeners(store.dispatch);