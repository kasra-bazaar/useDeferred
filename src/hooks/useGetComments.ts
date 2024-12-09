import { useEffect, useState } from "react";
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function useGetComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = (await response.json()) as Comment[];
      setComments(data);
    };
    void getComments();
  }, []);

  return { comments };
}
