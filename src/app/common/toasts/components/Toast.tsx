import type {
  ToastCloseProps,
  ToastContentProps,
  ToastIconProps,
  ToastProps,
} from "@/app/common/toasts/models/interfaces/toast";

import { TOAST_TIMEOUT } from "../models/constants/toast.const";
import styles from "./Toast.module.css";

const Toast: React.FC<ToastProps<string>> & {
  Icon: React.FC<ToastIconProps>;
  Content: React.FC<ToastContentProps>;
  Close: React.FC<ToastCloseProps>;
} = ({ children, type }) => (
  <dialog
    className={styles.toast}
    toast-type={type}
    style={{ "--toast-life": `${TOAST_TIMEOUT}ms` } as React.CSSProperties}
  >
    {children}
  </dialog>
);

const Icon: React.FC<ToastIconProps> = ({ children, source }) => (
  <>
    {children ?? <img className={styles.icon} src={source} alt="toast logo" />}
  </>
);

const Content: React.FC<ToastContentProps> = ({ children, title, message }) => (
  <article className={styles.content}>
    {children ?? (
      <>
        <h6>{title}</h6>
        <p>{message}</p>
      </>
    )}
  </article>
);

const Close: React.FC<ToastCloseProps> = ({ children, closeFn }) => (
  <button
    className={styles.close}
    type="button"
    title="cerrar"
    onClick={closeFn}
  >
    {children ?? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </svg>
    )}
  </button>
);

Toast.Icon = Icon;
Toast.Content = Content;
Toast.Close = Close;

export default Toast;
