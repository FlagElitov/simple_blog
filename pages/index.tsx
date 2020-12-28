import Link from "next/link";
import { NextPage } from "next";
import axios from "axios";

import MainLayout from "../components/MainLayout";
import { PostsType } from "../redux/types/types";
import styles from "../styles/index.module.css";

interface Props {
  postsData: PostsType[];
}

const latestPosts: NextPage<Props> = ({ postsData }) => {
  const posts = postsData;

  return (
    <MainLayout title="Latest Posts">
      <h1>Blog</h1>

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

latestPosts.getInitialProps = async () => {
  const res = await axios.get(`https://simple-blog-api.crew.red/posts`);

  return { postsData: res.data };
};

export default latestPosts;
