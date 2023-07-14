import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const posts = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/skills" }),
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.data.data.map(({ _id }) => ({ type: "Post", _id })),
      ],
    }),
    fetchUserInfo: builder.mutation({
      query: (body) => ({
        url: "/getMyProfile",
        method: "POST",
        body,
      }),
      providesTags: ["User"],
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
      query: (body) => ({
        url: "/getMyPosts",
        method: "POST",
        body,
      }),
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.data.data.map(({ _id }) => ({ type: "Post", _id })),
      ],
    }),
    fetchHomeInfo: builder.mutation({
      query: (body) => ({
        url: "/getHomePage",
        method: "POST",
        body,
      }),
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.data.posts.map(({ _id }) => ({ type: "Post", _id })),
      ],
    }),
    // createPost: builder.mutation({
    //   query: (id,data) => ({
    //     url: '/createPost',
    //     method: 'POST',
    //     body: data,
    //   }), invalidatesTags: ['Post']
    // }),
    createPost: builder.mutation({
      query: (id, data) => ({
        url: "/createpost",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    followUser: builder.mutation({
      query: (data) => ({
        url: `/follow`,
        method: "POST",
        body: data,
      }),
    }),
    addLikeToPost: builder.mutation({
      query: (data) => ({
        url: `/addLike`,

        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg._id }],
    }),
    addCommentToPost: builder.mutation({
      query: (data) => ({
        url: `/addComment`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg._id }],
    }),
    editPost: builder.mutation({
      query: (data) => ({
        url: `/editMyPost`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg._id }],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `/deleteMyPost`,
        method: "DELETE",
        invalidatesTags: ["Post"],
      }),
    }),
  }),
});

export const {
  useFetchPostsQuery,
  useFetchUserInfoMutation,
  useFetchMyPostsQuery,
  useFetchHomeInfoMutation,
  useCreatePostMutation,
  useFollowUserMutation,
  useAddLikeToPostMutation,
  useAddCommentToPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = posts;
