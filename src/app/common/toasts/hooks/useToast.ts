import { useCallback, useState } from "react";
import { useDialogRefs } from "../../hooks/useDialogRefs";
import { IToast } from "../interfaces/toast";

export const useToast = <T>() => {
  const [toasts, setToasts] = useState<IToast<T>[]>([]);
  const { getDialog, setDialog } = useDialogRefs<T>();

  const addToast = useCallback(({ id, type, title, message }: IToast<T>) => {
    setToasts((prevToasts) => [...prevToasts, { id, type, title, message }]);
  }, []);
  const removeToast = useCallback((id: T) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);
  const closeDialog = useCallback(
    (id: T) => getDialog(id)?.close(),
    [getDialog]
  );

  return { toasts, addToast, removeToast, getDialog, setDialog, closeDialog };
};
