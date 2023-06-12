import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const login = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' ,credentials:"include"}),

    tagTypes: ['User'],
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
        }),
        forgotPasswordPhoneNumber:builder.mutation({
            query: (data) => ({
                url: '/forgotPassword/phoneNumber',
                method: 'POST',
                body: data //user will enter the phone Number
            }),
        }),
    }),
})



export const { useUserLoginMutation,useForgotPasswordPhoneNumberMutation } = login;