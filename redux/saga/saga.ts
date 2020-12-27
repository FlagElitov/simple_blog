import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_POSTS,
  postsSuccess,
  postsLoading,
  postsFail,
} from "../action/action";

const takeEveryUp: any = takeEvery;

export function* sagaWatcherGetPosts() {
  yield takeEveryUp(REQUEST_POSTS, sagaWorkerGetPosts);
}

function* sagaWorkerGetPosts() {
  try {
    yield put(postsLoading());
    const payload = yield call(
      axios.get,
      `https://simple-blog-api.crew.red/posts`
    );
    yield put(postsSuccess(payload.data));
  } catch (e) {
    yield put(postsFail());
  }
}

export default function* root() {
  yield all([fork(sagaWatcherGetPosts)]);
}

// export function* sagaWatcherGetPosts() {
//   yield takeEveryUp(REQUEST_POSTS, sagaWorkerGetPosts);
// }

// function* sagaWorkerGetPosts({ pokemonName }: { pokemonName: any }) {
//   try {
//     yield put(postsLoading());
//     const payload = yield call(
//       axios.get,
//       `https://simple-blog-api.crew.red/posts`
//     );
//     yield put(postsSuccess(payload.data));
//   } catch (e) {
//     yield put(postsFail());
//   }
// }
