import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../components/MainLayout";
import { requestPosts } from "../redux/action/action";
import { RootStore } from "../redux/redux-store";
import { initialStateT, PostsType } from "../redux/types/types";
import styles from "../styles/index.module.css";

const latestPosts: React.FC = () => {
  const dispatch = useDispatch();
  const state: initialStateT = useSelector((state: RootStore[]) => state.posts);

  const posts = state.posts.reverse();

  useEffect(() => {
    dispatch(requestPosts());
  }, []);

  return (
    <MainLayout title="Latest Posts">
      <h1>Blog</h1>
      {state.loading && "Загрузка!"}
      {state.faile && "Ошибка!"}

      {posts.map((posts: PostsType) => (
        <div key={posts.id} className={styles.posts}>
          <Link href={`/posts/${posts.id}`}>
            <a>
              <div className={styles.posts__items}>Title : {posts.title}</div>
              <div className={styles.posts__items}>Body : {posts.body}</div>
            </a>
          </Link>
        </div>
      ))}
    </MainLayout>
  );
};
export default latestPosts;
