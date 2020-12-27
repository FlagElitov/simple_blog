import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import MainLayout from "../components/MainLayout";
import { requestPosts } from "../redux/action/action";
import { RootStore } from "../redux/redux-store";
import { initialStateT, PostsType } from "../redux/types/types";

const Div = styled.div`
  margin: 15px 10px;
  padding: 5px 5px;
  background: #fdfdfd;
  border: 1px solid red;
`;
const Text = styled.div`
  text-decoration: none;
  color: #000;
`;
const Blog = styled.h1`
  text-decoration: none;
  color: #000;
`;

const latestPosts: React.FC = () => {
  const dispatch = useDispatch();
  const state: initialStateT = useSelector((state: RootStore[]) => state.posts);

  const posts = state.posts.reverse();

  useEffect(() => {
    dispatch(requestPosts());
  }, []);

  return (
    <MainLayout title="Latest Posts">
      <Blog>Blog</Blog>
      {state.loading && "Загрузка!"}
      {state.faile && "Ошибка!"}

      {posts.map((posts: PostsType) => (
        <Link key={posts.id} href={`/posts/${posts.id}`}>
          <a>
            <Div>
              <Text>Title : {posts.title}</Text>
              <Text>Body : {posts.body}</Text>
            </Div>
          </a>
        </Link>
      ))}
    </MainLayout>
  );
};
export default latestPosts;
