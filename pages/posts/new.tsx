import { useState } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../../components/MainLayout";
import { postPosts } from "../../redux/action/action";

export default function latestPosts() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handlePost = () => {
    dispatch(postPosts(title, body));
    setTitle("");
    setBody("");
  };

  return (
    <MainLayout title="New Posts">
      <h1>New Posts</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Введите текст"
      />
      <button onClick={handlePost}>Отправить</button>
    </MainLayout>
  );
}
