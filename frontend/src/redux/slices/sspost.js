import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://locahost:8000';

const api = axios.create({
  baseURL: url,
});


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.log(error);

  }
});

export const updateFollowersInfo = createAsyncThunk('posts/updateFollowersInfo', async (payload) => {
  try {
    const { userId, updatedFollowersData } = payload;
    const response = await api.put(`/users/${userId}/followers`, updatedFollowersData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchUserInfo = createAsyncThunk('posts/fetchUserInfo', async (userId) => {
  try {
    const response = await api.get(`/users/getMyProfile/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);

  }
});


export const createPost = createAsyncThunk('posts/createPost', async ({ postName, description, image }) => {
  try {
    const response = await api.post(`$/users/createMyPosts`, {
      postName,
      description,
      image,
    });
    return response.data.message.data;
  } catch (error) {
    console.log(error)
  }
});


export const followUser = createAsyncThunk('posts/followUser', async (userId) => {
  try {
    const response = await api.post(`/users/follow`, { id: userId });
    return response.data.status;
  } catch (error) {
    console.log(error)
  }
});


export const addLikeToPost = createAsyncThunk('posts/addLikeToPost', async (postId) => {
  try {
    const response = await api.post(`/users/addLike`, { postid: postId });
    return response.data.status;
  } catch (error) {
    console.log(error)
  }
});


export const addCommentToPost = createAsyncThunk(
  'posts/addCommentToPost',
  async ({ postId, description }) => {
    try {
      const response = await api.post(`/users/addComment`, { postid: postId, description });
      return response.data.status;
    } catch (error) {
      console.log(error)
    }
  }
);


export const editPost = createAsyncThunk('posts/editPost', async ({ postId, image, description }) => {
  try {
    const response = await api.post(`/users/editMyPost`, {
      postid: postId,
      image,
      description,
    });
    return response.data.message.data;
  } catch (error) {
    console.log(error)
  }
});


export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  try {
    const response = await api.post(`/users/deleteMyPost`, { postid: postId });
    return response.data.status;
  } catch (error) {
    console.log(error)
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    userInfo: null,
    loading: false,
    loadingCreatePost: false,
    loadingFollowUser: false,
    loadingAddLikeToPost: false,
    loadingAddCommentToPost: false,
    loadingEditPost: false,
    loadingDeletePost: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateFollowersInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateFollowersInfo.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateFollowersInfo.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createPost.pending, (state) => {
        state.loadingCreatePost = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loadingCreatePost = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loadingCreatePost = false;
      })
      .addCase(followUser.pending, (state) => {
        state.loadingFollowUser = true;
      })
      .addCase(followUser.fulfilled, (state) => {
        state.loadingFollowUser = false;
      })
      .addCase(followUser.rejected, (state, action) => {
        state.loadingFollowUser = false;
      })
      .addCase(addLikeToPost.pending, (state) => {
        state.loadingAddLikeToPost = true;
      })
      .addCase(addLikeToPost.fulfilled, (state) => {
        state.loadingAddLikeToPost = false;
      })
      .addCase(addLikeToPost.rejected, (state, action) => {
        state.loadingAddLikeToPost = false;
      })
      .addCase(addCommentToPost.pending, (state) => {
        state.loadingAddCommentToPost = true;
      })
      .addCase(addCommentToPost.fulfilled, (state) => {
        state.loadingAddCommentToPost = false;
      })
      .addCase(addCommentToPost.rejected, (state, action) => {
        state.loadingAddCommentToPost = false;
      })
      .addCase(editPost.pending, (state) => {
        state.loadingEditPost = true;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.loadingEditPost = false;
        const updatedPost = action.payload;
        state.posts = state.posts.map((post) => {
          if (post._id === updatedPost._id) {
            return updatedPost;
          }
          return post;
        });
      })
      .addCase(editPost.rejected, (state, action) => {
        state.loadingEditPost = false;
      })
      .addCase(deletePost.pending, (state) => {
        state.loadingDeletePost = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loadingDeletePost = false;
        const deletedPostId = action.payload;
        state.posts = state.posts.filter((post) => post._id !== deletedPostId);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loadingDeletePost = false;
      });
  },
});


export default postsSlice.reducer;
