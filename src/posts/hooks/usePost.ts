import { fetchSuspender } from "@/common/services/fetch-suspender";
import { IPost } from "@/posts/models/post";
import { useParams } from "react-router-dom";
import { useFetch } from "../../common/hooks/useFetch";
export const POSTS_URL = "https://jsonplaceholder.typicode.com/posts/";
export const getPosts = fetchSuspender<IPost[]>(POSTS_URL).read;
export const usePost = () => {
  const { postId } = useParams<{ postId: string }>();
  if (!postId) throw new Error("postId is required");
  const { data, error, fetchApi, handleCancelRequest, loading } =
    useFetch<IPost>(POSTS_URL + postId);
  return { post: data, error, fetchApi, handleCancelRequest, loading };
};
