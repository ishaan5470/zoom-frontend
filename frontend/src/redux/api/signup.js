import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const signUp = createApi({
    reducerPath: 'signUp',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/registeration',
    credentials:"include"
    // prepareHeaders: (headers, { getState }) => {
    //     const token = getState().token
    //     console.log(getState());
    //     if (token) {
    //       headers.set('Authorization', token)
    //     }
    
    //     return headers
    //   }
}),

    tagTypes: ['User'],
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (data) => ({
                url: '/', 
                method: 'POST',
                body: data //user will enter their name,usename and email
            }),providesTags:['User']
        }),

        verifyUser:builder.query({
            query:(id)=>(`/verify?id=${id}`),invalidatesTags:['User']
        }),

        setPassword:builder.mutation({
            query:(body)=>({
                url:'/verify/setPassword',
                method:'POST',
                body, // User enters the Password
            }),invalidatesTags:['User']
        }),

        sendPhoneNumber:builder.mutation({
            query:(body)=>({
                url:'/phoneNumber',
                method:'POST',
                body, // User enters the PhoneNumber
            }),invalidatesTags:['User']
        }),

        verifyPhoneNumber:builder.mutation({
            query:(body)=>({
                url:'/phoneNumber/verify',
                method:'POST',
                body, // User enters the phoneNumber and OtP
            }),invalidatesTags:['User']
        }),

        resendOtp:builder.mutation({
            query:(body)=>({
                url:'/phoneNumber/verify/resend',
                method:'POST',
                body, // User enters the phoneNumber
            }),invalidatesTags:['User']                
        }),

        deleteIncompleteSignup:builder.mutation({
            query:(body)=>({
                url:"/phoneNumber/verify/delete",
                method:"DELETE",
                body,//takes the input as phoneNumber of unfinished registeration
            }),invalidatesTags:['User']
        }),
        
        //user sets password and userName
        setCredentials:builder.mutation({
            query:(body)=>({
                url:"/phoneNumber/verify/setCredentials",
                method:"POST",
                body,//user enters password and userName
            }),invalidatesTags:['User']
        })

    }),
})

export const {useUserLoginMutation,useVerifyUserQuery,useSetPasswordMutation,useSendPhoneNumberMutation,useVerifyPhoneNumberMutation,useResendOtpMutation,useDeleteIncompleteSignupMutation,useSetCredentialsMutation} = signUp;