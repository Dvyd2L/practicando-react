import ErrorComponent from "@/app/common/components/Error";
import Loading from "@/app/common/components/Loading";
import { usePost } from "@/app/posts/hooks/usePost";
import { Link } from "react-router-dom";
const PostDetail = () => {
  const { post, loading, error } = usePost();
  return (
    <>
      {error && <ErrorComponent />}
      {loading && <Loading />}
      {!error && !loading && post && (
        <>
          <h1>Post {post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={'../'}>Volver</Link>
        </>
      )}
    </>
  );
};
export default PostDetail;
