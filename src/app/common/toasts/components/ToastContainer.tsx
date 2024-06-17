
import { useToastContext } from "../contexts/ToastContext";
import Toast from "./Toast";
import styles from "./ToastContainer.module.css";

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToastContext();
  return (
    <aside className={styles.toastContainer}>
      {toasts.map(({ id, message, title, type }) => (
        <Toast key={id} id={id} type={type}>
          <Toast.Icon source="icon.png" />
          <Toast.Content title={title} message={message} />
          <Toast.Close closeFn={() => removeToast(id)} />
        </Toast>
      ))}
    </aside>
  );
};

export default ToastContainer;
