import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";
import { requestPosts } from "../redux/action/action";
import { RootStore } from "../redux/redux-store";
import { initialStateT, PostsType } from "../redux/types/types";

export default function latestPosts() {
  const dispatch = useDispatch();
  const posts: initialStateT = useSelector((state: RootStore) => state.posts);
  console.log(posts);
  useEffect(() => {
    dispatch(requestPosts());
  }, []);

  return (
    <MainLayout title="Latest Posts">
      <h1>Hello Nest.js</h1>

      <p> {posts.posts && posts.posts.map((posts) => {})} </p>
    </MainLayout>
  );
}
