import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";
import { requestPosts } from "../redux/action/action";
import { RootStore } from "../redux/redux-store";
import { PostsType } from "../redux/types/types";

export default function latestPosts() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootStore[]) => state.posts);
  console.log(state);
  useEffect(() => {
    dispatch(requestPosts());
  }, []);

  return (
    <MainLayout title="Latest Posts">
      <h1>Hello Nest.js</h1>

      {state.posts.map((posts: PostsType) => (
        <div key={posts.id}>
          <div>{posts.title}</div>
          <div>{posts.body}</div>
        </div>
      ))}
    </MainLayout>
  );
}
