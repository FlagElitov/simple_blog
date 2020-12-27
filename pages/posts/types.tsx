export interface StateTypes {
  title: string;
  body: string;
  id: number;
  comments: commenstTypes[];
}

interface commenstTypes {
  postId: number;
  body: string;
  id: number;
}
