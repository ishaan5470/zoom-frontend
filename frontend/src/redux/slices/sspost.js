import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const posts = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => ({
        url: '/users/getAllPosts',
        method: 'GET',
      }), providesTags: (result = [], error, arg) => [
        'Post',
        ...result.data.data.map(({ _id }) => ({ type: 'Post', _id }))
      ]

    }),

    //make another endpoint fir this

    // fetchUserInfo: builder.query({
    //   query: (Id) => ({
    //     url: '/users/getMyProfile',
    //     method: 'GET',
    //     body: { id: Id },
    //   }),
    // }),
    fetchUserInfo: builder.query({
      query: (Id) => ({
        url: '/users/getMyProfile',
        method: 'POST',
        body: { id: Id },

      }), providesTags: ['User']
    }),
    //Route from home page (Not Integrated yet)
    // fetchHomeInfo: builder.query({
    //   query: (Id) => ({
    //     url: '/users/getHomePage',
    //     method: 'POST',
    //     body: { id: Id },

    //   }), providesTags: ['Post']
    // }),

    fetchMyPosts: builder.query({
      query: (Id) => ({
        url: '/users/getMyPosts',
        method: 'POST',
        body: { id: Id },

      }), providesTags: (result = [], error, arg) => [
        'Post',
        ...result.data.data.map(({ _id }) => ({ type: 'Post', _id }))
      ]

    }),
    fetchHomeInfo: builder.query({
      query: (Id) => ({
        url: '/users/getHomePage',
        method: 'POST',
        body: { id: Id },

      }), providesTags: (result = [], error, arg) => [
        'Post',
        ...result.data.posts.map(({ _id }) => ({ type: 'Post', _id }))
      ]
    }),

    //   fetchHomeInfo: builder.query({
    //   query: (Id) => ({
    //     url: '/users/getAllPosts',
    //     method: 'GET',
    //   }),
    //   providesTags: (result = [], error, arg) => [
    //     'Post',
    //     ...result.data.posts.map(({ _id }) => ({ type: 'Post', _id }))
    //   ]
    // }),
    createPost: builder.mutation({
      query: (data) => ({
        url: '/users/createMyPosts',
        method: 'POST',
        body: data,
      }), invalidatesTags: ['Post']
    }),
    followUser: builder.mutation({
      query: (data) => ({
        url: `/users/follow`,
        method: 'POST',
        body: data,
      }),
    }),
    addLikeToPost: builder.mutation({
      query: (data) => ({
        url: `/users/addLike`,

        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg._id }]
    }),
    addCommentToPost: builder.mutation({
      query: (data) => ({
        url: `/users/addComment`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg._id }],
    }),
    editPost: builder.mutation({
      query: (data) => ({
        url: `/users/editMyPost`,
        method: 'PUT',
        body: data,
      }),

      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg._id }],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `posts/deleteMyPost`,
        method: 'DELETE',
        invalidatesTags: ['Post']
      }),
    }),
  }),
});

export const { useFetchPostsQuery, useFetchUserInfoQuery, useFetchMyPostsQuery, useFetchHomeInfoQuery, useCreatePostMutation, useFollowUserMutation, useAddLikeToPostMutation, useAddCommentToPostMutation, useEditPostMutation, useDeletePostMutation } = posts;

