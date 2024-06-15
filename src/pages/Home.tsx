import { Suspense, lazy } from "react";
import "./Home.module.css";

// Components
import ErrorComponent from "@/common/components/Error";
import ErrorBoundary from "@/common/components/ErrorBoundary";
import Loading from "@/common/components/Loading";

// Custom hooks & helpers
import { useDialogRefs } from "@/common/hooks/useDialogRefs";
import { useFetch } from "@/common/hooks/useFetch";
import type { IUser } from "@/users/models/user";

// Lazy loaded components
const UserForm = lazy(() => import("@/users/components/UserForm.tsx"));
const DataGrid = lazy(() => import("@/common/components/DataGrid"));

const USERS_API_URL = "http://localhost:8080/api/users";
//const { read: getUsers } = fetchData<IUser[]>(USERS_API_URL);
const handleSubmit = async (
  options: {
    user?: IUser;
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
  }) => {
  const { url, method, user } = options;
  await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: user ? JSON.stringify(user) : null,
  })
    .catch(console.error);
};
const Home = () => {
  const { getDialog, setDialog } = useDialogRefs();
  const { data, error, loading, handleCancelRequest, fetchApi } =
    useFetch<IUser[]>(USERS_API_URL);
  const showDialog = (id?: number) => getDialog(id)?.show();
  return (
    <>
      <h1>Prueba Java+Maven & React</h1>

      {/* Suspense + Error Boundary Components for Lazy load components */}
      {/* <ErrorBoundary fallback={<ErrorComponent />}>
        <Suspense fallback={<Loading />}> */}
          <UserForm
            handleSubmit={(user: IUser) =>
              handleSubmit({ user, url: USERS_API_URL, method: "POST" })
            }
          />
        {/* </Suspense>
      </ErrorBoundary> */}

      <ErrorBoundary fallback={<ErrorComponent />}>
        <Suspense fallback={<Loading handleClick={handleCancelRequest} />}>
          {/* Custom Hook */}
          {loading && <Loading handleClick={handleCancelRequest} />}
          {error && <ErrorComponent />}
          {!loading && !error && data && (
            <DataGrid
              data={data}
              handlers={{
                update: showDialog,
                delete: (id?: number) =>
                  handleSubmit({
                    url: `${USERS_API_URL}/${id}`,
                    method: "DELETE",
                  }).finally(fetchApi),
              }}
            />
          )}
        </Suspense>
      </ErrorBoundary>

      {data?.length &&
        data.map((obj) => (
          <dialog ref={(el) => el && setDialog(obj.id, el)} key={obj.id}>
            <button type="button" onClick={() => getDialog(obj.id)?.close()}>
              Cerrar
            </button>
            <UserForm
              user={obj}
              handleSubmit={(user: IUser) =>
                handleSubmit({
                  user,
                  url: `${USERS_API_URL}/${obj.id}`,
                  method: "PUT",
                })
              }
            />
          </dialog>
        ))}
    </>
  );
};
export default Home;
