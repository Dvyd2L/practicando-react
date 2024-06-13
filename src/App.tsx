import { Suspense, useState } from "react";
import "./App.tsx.css";
import DataGrid from "./components/DataGrid.tsx";
import ErrorComponent from "./components/Error.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Loading from "./components/Loading.tsx";
import UserForm from "./components/UserForm.tsx";
import { useDialogRefs } from "./hooks/useDialogRefs.ts";
import { useFetch } from "./hooks/useFetch.ts";
import type { IUser } from "./models/user";
import { fetchData } from "./services/fetch-data.ts";

const USERS_API_URL = "http://localhost:8080/api/users";
const apiData = fetchData<IUser[]>(USERS_API_URL);

function App() {
  const { getDialog, setDialog } = useDialogRefs();
  //const data = apiData.read();
  const [data, setData] = useState(apiData.read());
  const {
    data: users,
    error,
    loading,
    fetchApi,
    handleCancelRequest,
  } = useFetch<IUser[]>(USERS_API_URL);
  const handleSubmit = async (
    user: IUser,
    url = USERS_API_URL,
    method: "GET" | "POST" | "PUT" | "DELETE" = "POST"
  ) => {
    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    await fetchApi(); // reload data after post
  };
  const showDialog = (id?: number) => getDialog(id)?.show();
  const handleDelete = async (id?: number) =>
    await fetch(`${USERS_API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error)
      .finally(() => {
        fetchApi();
        setData(apiData.read());
      });

  return (
    <>
      <main>
        <h1>Prueba Java+Maven & React</h1>
        <UserForm handleSubmit={handleSubmit} />

        {/* Suspense + Error Boundary Components */}
        <ErrorBoundary fallback={<ErrorComponent />}>
          <Suspense fallback={<Loading handleClick={handleCancelRequest} />}>
            {data && (
              <DataGrid
                data={data}
                handlers={{
                  update: showDialog,
                  delete: handleDelete,
                }}
              />
            )}
          </Suspense>
        </ErrorBoundary>

        {/* Custom Hook */}
        {loading && <Loading handleClick={handleCancelRequest} />}
        {error && <ErrorComponent />}
        {users && (
          <DataGrid
            data={users}
            handlers={{
              update: showDialog,
              delete: handleDelete,
            }}
          />
        )}
      </main>

      {data?.length &&
        data.map((obj) => (
          <dialog ref={(el) => el && setDialog(obj.id, el)} key={obj.id}>
            <button type="button" onClick={() => getDialog(obj.id)?.close()}>
              Cerrar
            </button>
            <UserForm
              user={obj}
              handleSubmit={(user: IUser) =>
                handleSubmit(user, `${USERS_API_URL}/${obj.id}`, "PUT")
              }
            />
          </dialog>
        ))}
    </>
  );
}

export default App;
