import { useFetch } from "@/app/common/hooks/useFetch";
import { fetchSuspender } from "@/app/common/services/fetch-suspender";
import { IPost } from "@/app/posts/models/post";
import { useParams } from "react-router-dom";
export const POSTS_URL = "https://jsonplaceholder.typicode.com/posts/";
export const getPosts = fetchSuspender<IPost[]>(POSTS_URL).read;
export const usePost = () => {
  const { postId } = useParams<{ postId: string }>();
  if (!postId) throw new Error("postId is required");
  const { data, error, fetchApi, handleCancelRequest, loading } =
    useFetch<IPost>(POSTS_URL + postId);
  return { post: data, error, fetchApi, handleCancelRequest, loading };
};