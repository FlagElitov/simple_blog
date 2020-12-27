import Link from "next/link";
import { useEffect, useState } from "react";
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
`;
const Text = styled.div`
  text-decoration: none;
`;

const latestPosts: React.FC = () => {
  const dispatch = useDispatch();
  const state: initialStateT = useSelector((state: RootStore[]) => state.posts);

  useEffect(() => {
    dispatch(requestPosts());
  }, []);

  return (
    <MainLayout title="Latest Posts">
      <h1>Hello Nest.js</h1>
      {state.loading && "Загрузка!"}
      {state.faile && "Ошибка!"}

      {state.posts.map((posts: PostsType) => (
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
