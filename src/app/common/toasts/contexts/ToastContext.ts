import { createContextFactory } from "@/app/core/context/createContextFactory";
import { useToast } from "../hooks/useToast";
export const {
  GenericProvider: ToastProvider,
  useGenericContext: useToastContext,
} = createContextFactory(useToast<string>);