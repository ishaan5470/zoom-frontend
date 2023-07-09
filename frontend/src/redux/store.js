import { configureStore } from '@reduxjs/toolkit';
import { posts } from "./api/sspost";
import { login } from './api/login';
import { signUp } from './api/signup';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userReducer from "./slices/userSlice";

import { profile } from "./api/profile"


export const store = configureStore({
    reducer: {
        userReducer,
        [posts.reducerPath]: posts.reducer,
        [login.reducerPath]: login.reducer,
        [signUp.reducerPath]: signUp.reducer,
        [profile.reducerPath]: profile.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(posts.middleware)
            .concat(profile.middleware)
            .concat(login.middleware)
            .concat(signUp.middleware)

});

setupListeners(store.dispatch);

