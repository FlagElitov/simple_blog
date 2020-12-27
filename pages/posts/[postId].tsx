import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/index.module.css";

import MainLayout from "../../components/MainLayout";

interface Router {
  query: {
    postId?: string;
  };
}
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

const PostPage = () => {
  const router: Router = useRouter();

  const [state, setState] = useState<StateTypes>({
    title: "",
    body: "",
    id: 0,
  });
  useEffect(() => {
    axios
      .get(
        `https://simple-blog-api.crew.red/posts/${router.query.postId}?_embed=comments`
      )
      .then((res) => {
        setState(res.data);
      });
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

export default PostPage;
