import { configureStore } from '@reduxjs/toolkit';
import { posts } from "./slices/sspost";
import { login } from './slices/login';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userReducer from "./slices/userSlice";

import { profile } from "./slices/profile"


export const store = configureStore({
    reducer: {
        userReducer,
        [posts.reducerPath]: posts.reducer,
        [login.reducerPath]: login.reducer,
        [profile.reducerPath]: profile.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(posts.middleware)
            .concat(profile.middleware)
            .concat(login.middleware)

});

setupListeners(store.dispatch);
        
