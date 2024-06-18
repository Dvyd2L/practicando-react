import Btn from "@/app/common/components/Btn";
import { useToastContext } from "@/app/common/toasts/contexts/ToastContext";
import { TOAST_TYPES } from "@/app/common/toasts/models/enums/toasts-types";
import HomeLayout from "@/app/home/layout/HomeLayout.tsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { addToast } = useToastContext();
  return (
    <HomeLayout>
      <h1>Home Page</h1>

      <Btn
        type="button"
        onClick={() =>
          addToast({
            id: crypto.randomUUID(),
            title: "Título del toast",
            message: "mensaje del toast",
            type: TOAST_TYPES.INFO,
          })
        }
      >
        InfoToast
      </Btn>

      <Btn
        type="button"
        onClick={() =>
          addToast({
            id: crypto.randomUUID(),
            title: "Título del toast",
            message: "mensaje del toast",
            type: TOAST_TYPES.SUCCESS,
          })
        }
      >
        SuccessToast
      </Btn>

      <Btn
        type="button"
        onClick={() =>
          addToast({
            id: crypto.randomUUID(),
            title: "Título del toast",
            message: "mensaje del toast",
            type: TOAST_TYPES.WARN,
          })
        }
      >
        WarningToast
      </Btn>

      <Btn
        type="button"
        onClick={() =>
          addToast({
            id: crypto.randomUUID(),
            title: "Título del toast",
            message: "mensaje del toast",
            type: TOAST_TYPES.ERROR,
          })
        }
      >
        ErrorToast
      </Btn>

      <Link to="/users">Entrar</Link>
    </HomeLayout>
  );
};
export default HomePage;
