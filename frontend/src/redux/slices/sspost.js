import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const posts = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => 'posts',
      providesTags: (result = [], error, arg) => [
        'Post',
        ...result.map(({ id }) => ({ type: 'Post', id }))
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
    }),
    addCommentToPost: builder.mutation({
      query: (data) => ({
        url: `posts/${data.postId}/comment`,
        method: 'POST',
        body: data,
      }),
    }),
    editPost: builder.mutation({
      query: (data) => ({
        url: `posts/${data.postId}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchPostsQuery, useUpdateFollowersInfoMutation, useFetchUserInfoQuery, useCreatePostMutation, useFollowUserMutation, useAddLikeToPostMutation, useAddCommentToPostMutation, useEditPostMutation, useDeletePostMutation } = posts;

