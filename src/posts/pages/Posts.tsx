import { getPosts } from "@/posts/hooks/usePost";
import { Link, Outlet, useParams } from "react-router-dom";
import "./Posts.module.css";
const Posts = () => {
  const { postId } = useParams<{ postId?: string }>();
  const posts = getPosts();
  return (
    <>
      {postId && <Outlet />}
      {!postId && (
        <>
          <h1>Posts</h1>
          <ul>
            {posts &&
              posts.map(({ id, title, body }) => (
                <li key={id}>
                  <Link to={`${id}`}>
                    <h2>{title}</h2>
                  </Link>
                  <p>{body}</p>
                </li>
              ))}
          </ul>
        </>
      )}
    </>
  );
};
export default Posts;
