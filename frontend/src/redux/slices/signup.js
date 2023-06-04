import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const login = createApi({
    reducerPath: 'signUp',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/registeration',
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
        })

    }),
})