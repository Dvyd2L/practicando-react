import "./App.module.css";
import AppRouter from "./App.routes.tsx";
import ToastContainer from "./common/toasts/components/ToastContainer.tsx";
import { ToastProvider } from "./common/toasts/contexts/ToastContext.ts";
const App = () => (
  <ToastProvider>
    <AppRouter />
    <ToastContainer />
  </ToastProvider>
);
export default App;
