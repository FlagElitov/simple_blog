import axios from "axios";
import { useEffect, useState } from "react";
import { NextPage } from "next";

import styles from "../../styles/index.module.css";
import MainLayout from "../../components/MainLayout";

interface StateTypes {
  title: string;
  body: string;
  id: number;
  comments?: commenstTypes[];
}

interface commenstTypes {
  postId: number;
  body: string;
  id: number;
}

interface Props {
  posts: StateTypes;
}

const PostPage: NextPage<Props> = ({ posts }) => {
  const [state, setState] = useState<StateTypes>({
    title: "",
    body: "",
    id: 0,
  });
  useEffect(() => {
    setState(posts);
  }, []);

  return (
    <MainLayout title="Post Page">
      <div className={styles.postId}>
        <div className={styles.postId__item}>
          Title : {state.title && state.title}
        </div>
        <div className={styles.postId__item}>
          Body : {state.body && state.body}
        </div>
        <div>
          Comments : {state.comments && state.comments.length}
          {state.comments &&
            state.comments.map((comment) => (
              <div className={styles.postId__item} key={comment.postId}>
                {comment.body}
              </div>
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

PostPage.getInitialProps = async (ctx) => {
  const res = await axios.get(
    `https://simple-blog-api.crew.red/posts/${ctx.query.postId}?_embed=comments`
  );

  return { posts: res.data };
};

export default PostPage;
