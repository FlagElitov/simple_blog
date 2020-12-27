import { POSTS_LOADING, POSTS_FAIL, POSTS_SUCCESS } from "./../action/action";
import { PostsDispatchTypes, initialStateT } from "./../types/types";

const initialState: initialStateT = {
  loading: false,
  faile: false,
  posts: [],
};

const PostsReducer = (
  state: initialStateT = initialState,
  action: PostsDispatchTypes
) => {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        faile: false,
        loading: true,
      };

    case POSTS_FAIL:
      return {
        ...state,
        loading: false,
        faile: true,
      };

    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default PostsReducer;
