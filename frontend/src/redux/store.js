import { configureStore } from '@reduxjs/toolkit';
import { posts } from "./slices/sspost"
import { profile } from "./slices/profile"


export const store = configureStore({
    reducer: {
        [posts.reducerPath]: posts.reducer,
        [profile.reducerPath]: profile.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(posts.middleware)
            .concat(profile.middleware)

});