import { configureStore } from '@reduxjs/toolkit';
import { posts } from "./api/sspost";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userReducer from "./slices/userSlice";



export const store = configureStore({
    reducer: {
        user:userReducer,
        [posts.reducerPath]: posts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(posts.middleware)

});

setupListeners(store.dispatch);

