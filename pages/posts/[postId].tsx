import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import MainLayout from "../../components/MainLayout";
import { StateTypes } from "./types";

interface Router {
  query: {
    postId?: string;
  };
}

const PostPage: React.FC = () => {
  const router: Router = useRouter();

  const [state, setState] = useState<StateTypes>();
  console.log(state);
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
      <h1>Post page {router.query.postId}</h1>
      <div>{state && state.title}</div>
      <div>{state && state.body}</div>
      <div>
        {state.comments
          ? state.comments.map((comment) => (
              <div key={comment.postId}>{comment.body}</div>
            ))
          : "Коментариев нет"}
      </div>
    </MainLayout>
  );
};

export default PostPage;
