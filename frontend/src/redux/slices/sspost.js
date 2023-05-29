import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const posts = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
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
    updateFollowersInfo: builder.mutation({
      query: (data) => ({
        url: `users/${data.userId}/followers`,
        method: 'PUT',
        body: data,
      }),
    }),
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

    fetchHomeInfo: builder.query({
      query: (Id) => ({
        url: '/users/getAllPosts',
        method: 'GET',
      }),
      providesTags: ['Post']
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: 'posts',
        method: 'POST',
        body: data,
      }), invalidatesTags: ['Post']
    }),
    followUser: builder.mutation({
      query: (data) => ({
        url: `users/${data.userId}/follow`,
        method: 'POST',
        body: data,
      }),
    }),
    addLikeToPost: builder.mutation({
      query: (data) => ({
        url: `posts/${data.postId}/like`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg._id }]
    }),
    addCommentToPost: builder.mutation({
      query: (data) => ({
        url: `posts/${data.postId}/comment`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg._id }],
    }),
    editPost: builder.mutation({
      query: (data) => ({
        url: `posts/${data.postId}`,
        method: 'PUT',
        body: data,
      }),

      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg._id }],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: 'DELETE',
        invalidatesTags: ['Post']
      }),
    }),
  }),
});

export const { useFetchPostsQuery, useFetchHomeInfoQuery, useUpdateFollowersInfoMutation, useFetchUserInfoQuery, useCreatePostMutation, useFollowUserMutation, useAddLikeToPostMutation, useAddCommentToPostMutation, useEditPostMutation, useDeletePostMutation } = posts;

