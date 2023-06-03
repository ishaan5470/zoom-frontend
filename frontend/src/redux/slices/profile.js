import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profile = createApi({
    reducerPath: 'profile',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: () => ({
                url: '/users/getMyPosts',
                method: 'GET',
            }), providesTags: (result = [], error, arg) => [
                'Post',
                ...result.data.data.map(({ _id }) => ({ type: 'Post', _id }))
            ]

        }),
    })
})

export const { useFetchPostsQuery } = profile;