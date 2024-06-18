import { IIDentificable } from "@/app/core/interfaces/identificable";
import { TOAST_TYPES } from "../enums/toasts-types";

export interface IToast<T> extends IIDentificable<T> {
  type: TOAST_TYPES;
  title: string;
  message: string;
  icon?: string;
}

export interface ToastProps<T> extends IIDentificable<T> {
  type: TOAST_TYPES;
  children: React.ReactNode;
}

export interface ToastContentProps {
  children?: React.ReactNode;
  title?: string;
  message?: string;
}

export interface ToastIconProps {
  children?: React.ReactNode;
  source?: string;
}

export interface ToastCloseProps {
  children?: React.ReactNode;
  closeFn: () => void;
}

export interface ToastContainerProps<T> {
  toasts: IToast<T>[];
  removeToast: (id: T) => void;
}

export interface ToastContextType<T> {
  toasts: IToast<T>[];
  addToast: ({ id, type, title, message }: IToast<T>) => void;
  removeToast: (id: T) => void;
}
