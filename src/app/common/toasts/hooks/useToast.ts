import { useCallback, useState } from "react";
import { useDialogRefs } from "../../hooks/useDialogRefs";
import { TOAST_TIMEOUT } from "../models/constants/toast.const";
import { TOAST_TYPES } from "../models/enums/toasts-types";
import { IToast } from "../models/interfaces/toast";

export const useToast = <T>() => {
  const [toasts, setToasts] = useState<IToast<T>[]>([]);
  const { getDialog, setDialog } = useDialogRefs<T>();

  const removeToast = useCallback((id: T) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const closeDialog = useCallback(
    (id: T) => {
      getDialog(id)?.close();
      removeToast(id);
    }, [getDialog, removeToast]
  );

  const addToast = useCallback(({ id, type, title, message }: IToast<T>) => {
    setToasts((prevToasts) => [...prevToasts, { id, type, title, message }]);
    setTimeout(()=> {
      closeDialog(id);
    }, TOAST_TIMEOUT)
  }, [closeDialog]);
  
  const getIcon = useCallback((type?: string) => {
    switch (type) {
      case TOAST_TYPES.SUCCESS:
        return "src/assets/svg/check-square-fill.svg";
      case TOAST_TYPES.ERROR:
        return "src/assets/svg/exclamation-octagon-fill.svg";
      case TOAST_TYPES.WARN:
        return "src/assets/svg/exclamation-triangle-fill.svg";
      case TOAST_TYPES.INFO:
        return "src/assets/svg/info-circle-fill.svg";
      default:
        return "";
    }
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
    getDialog,
    setDialog,
    closeDialog,
    getIcon,
  };
};
