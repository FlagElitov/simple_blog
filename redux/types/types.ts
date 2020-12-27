import {
  POSTS_FAIL,
  POSTS_LOADING,
  POSTS_SUCCESS,
  REQUEST_POSTS,
} from "../action/action";

export interface initialStateT {
  loading: boolean;
  faile: boolean;
  posts: PostsType[];
}

export type PostsType = {
  title: string;
  body: string;
  id: number;
};

export interface PostsLoading {
  type: typeof POSTS_LOADING;
}
export interface PostsFail {
  type: typeof POSTS_FAIL;
}
export interface PostsSuccess {
  type: typeof POSTS_SUCCESS;
  payload: PostsType;
}
export interface RequestPosts {
  type: typeof REQUEST_POSTS;
}

export type PostsDispatchTypes = PostsLoading | PostsFail | PostsSuccess;
