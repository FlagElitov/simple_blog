import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import PostsReducer from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga/saga";

const saga = createSagaMiddleware();
const reducers = combineReducers({
  posts: PostsReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(saga)));

export type RootStore = ReturnType<typeof reducers>;
saga.run(rootSaga);
export default store;
