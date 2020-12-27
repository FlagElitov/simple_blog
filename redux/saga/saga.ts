import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_POSTS,
  postsSuccess,
  postsLoading,
  postsFail,
  POST_POSTS,
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

export function* sagaWatcherPost() {
  yield takeEveryUp(POST_POSTS, sagaWorkerPosts);
}

function* sagaWorkerPosts({ title, body }: { title: string; body: string }) {
  try {
    const payload = yield call(
      axios.post,
      `https://simple-blog-api.crew.red/posts`,
      { title, body }
    );
    yield put(postsSuccess(payload.data));
  } catch (e) {}
}

export default function* root() {
  yield all([fork(sagaWatcherGetPosts), fork(sagaWatcherPost)]);
}
