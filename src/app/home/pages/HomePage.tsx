import { useToastContext } from "@/app/common/toasts/contexts/ToastContext";
import HomeLayout from "@/app/home/layout/HomeLayout.tsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { addToast } = useToastContext();
  return (
    <HomeLayout>
      <h1>Home Page</h1>

      <button
        type="button"
        onClick={() =>
          addToast({
            id: crypto.randomUUID(),
            title: "Título del toast",
            message: "mensaje del toast",
            type: "info",
          })
        }
      >
        InfoToast
      </button>

      <button
        type="button"
        onClick={() =>
          addToast({
            id: crypto.randomUUID(),
            title: "Título del toast",
            message: "mensaje del toast",
            type: "success",
          })
        }
      >
        SuccessToast
      </button>

      <button
        type="button"
        onClick={() =>
          addToast({
            id: crypto.randomUUID(),
            title: "Título del toast",
            message: "mensaje del toast",
            type: "warn",
          })
        }
      >
        WarningToast
      </button>

      <button
        type="button"
        onClick={() =>
          addToast({
            id: crypto.randomUUID(),
            title: "Título del toast",
            message: "mensaje del toast",
            type: "error",
          })
        }
      >
        ErrorToast
      </button>

      <Link to="/users">Entrar</Link>
    </HomeLayout>
  );
};
export default HomePage;
