import { useState } from "react";
import MainLayout from "../../components/MainLayout";

export default function latestPosts() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  return (
    <MainLayout title="New Posts">
      <h1>New Posts</h1>

      <input type="text" placeholder="Заголовок" />
      <input type="text" placeholder="Введите текст" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cumque?{" "}
      </p>
    </MainLayout>
  );
}
