import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const login = createApi({
    reducerPath:'login',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints:(builder)=>({
        // userLogin:builder.mutation({
        //     query:(data)=>({
        //         url:'/login/',
        //         method:'POST',
        //         body:data
        //     })
        // }),
        // getUser:builder.query({
        //     query:()=>"/login/getAllUser",
        // }),
        getFakePosts:builder.query({
            query:()=>"posts"
        }), providesTags:['User']
    }),
})



export const {useGetFakePostsQuery} = login;