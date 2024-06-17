import HomeLayout from "@/app/home/layout/HomeLayout.tsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomeLayout>
      <h1>Home Page</h1>
      <Link to="/users">Entrar</Link>
    </HomeLayout>
  );
};
export default HomePage;
