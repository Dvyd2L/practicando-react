import { createContextFactory } from "@/app/core/context/createContextFactory";
import { useToast } from "../hooks/useToast";
export const [ToastProvider, useToastContext] = createContextFactory(
  useToast<string>
);
