import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

interface Router {
  query: {
    postId?: string;
  };
}

const PostPage = () => {
  const router: Router = useRouter();

  return (
    <MainLayout title="Post Page">
      <h1>Post page {router.query.postId}</h1>
    </MainLayout>
  );
};

export default PostPage;
