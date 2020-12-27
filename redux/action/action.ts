import { PostsType } from "../types/types";

export const POSTS_LOADING = "POSTS_LOADING";
export const POSTS_FAIL = "POSTS_FAIL";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const REQUEST_POSTS = "REQUEST_POSTS";

export const postsLoading = () => ({ type: POSTS_LOADING });
export const postsFail = () => ({ type: POSTS_FAIL });
export const postsSuccess = (payload: PostsType[]) => ({
  type: POSTS_SUCCESS,
  payload,
});
export const requestPosts = () => ({ type: REQUEST_POSTS });
