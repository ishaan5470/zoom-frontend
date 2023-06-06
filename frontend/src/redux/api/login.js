import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const login = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),

    tagTypes: ['User'],
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),keepUnusedDataFor:120
        }),
    }),
})



export const { useUserLoginMutation } = login;