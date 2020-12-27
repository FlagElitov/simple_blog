import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import MainLayout from "../../components/MainLayout";

interface Router {
  query: {
    postId?: string;
  };
}
interface StateTypes {
  title?: string;
  body?: string;
  id?: number;
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

      <div>Title : {state.title && state.title}</div>
      <div>Body : {state.body && state.body}</div>
      <div>
        Comments : {state.comments && state.comments.length}
        {state.comments &&
          state.comments.map((comment) => (
            <div key={comment.postId}>{comment.body}</div>
          ))}
      </div>
    </MainLayout>
  );
};

export default PostPage;
