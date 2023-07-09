import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const login = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/login' ,credentials:"include",
    prepareHeaders:(headers)=>{
        let token = localStorage.getItem("token");
        if(token){
            headers.set('authorization', token)
        }
        return headers;
    },
}),

    tagTypes: ['User'],
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data
            }),
        }),
        forgotPasswordPhoneNumber:builder.mutation({ 
            query: (body) => ({
                url: '/forgotPassword/phoneNumber',
                method: 'POST',
                body //user will enter the phone Number
            }),
        }),

        forgotPasswordEmail:builder.mutation({ 
            query: (body) => ({
                url: '/forgotPassword/email',
                method: 'POST',
                body //user will enter the email
            }),
        }),
        forgotPasswordVerifyOtp:builder.mutation({ 
            query: (body) => ({
                url: '/forgotPassword/verify',
                method: 'POST',
                body //user will enter the Otp
            }),
        }),
        forgotPasswordSetPassword:builder.mutation({ 
            query: (body) => ({
                url: '/forgotPassword/setPassword',
                method: 'POST',
                body //user will enter the Otp and email/phoneNumber
            }),
        }),
        protected:builder.query({
            query: () => ({
                url: '/protected',
                method: 'GET',//headers will be sent
            }),
        }),

        protectedUser:builder.query({
            query: () => ({
                url: '/protected/user',
                method: 'GET' //Dummy
            }),
        })

    }),
})



export const { useUserLoginMutation,useForgotPasswordPhoneNumberMutation,useForgotPasswordEmailMutation,useForgotPasswordVerifyOtpMutation,useForgotPasswordSetPasswordMutation,useProtectedQuery,useProtectedUserQuery } = login;