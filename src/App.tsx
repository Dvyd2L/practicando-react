import { Suspense } from "react";
import "./App.tsx.css";
import DataGrid from "./components/DataGrid.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import UserForm from "./components/UserForm.tsx";
import { useFetch } from "./hooks/useFetch.ts";
import type { IUser } from "./models/user";
import { fetchData } from "./services/fetch-data.ts";

const USERS_API_URL = "http://localhost:8080/api/users";
const apiData = fetchData<IUser[]>(USERS_API_URL);

function App() {
  const data = apiData?.read();
  const {
    data: users,
    error,
    loading,
    handleCancelRequest,
  } = useFetch<IUser[]>(USERS_API_URL);

  return (
    <main>
      <h1>Prueba Java+Maven & React</h1>
      <UserForm
        onSubmit={async (user: IUser) =>
          await fetch("http://localhost:8080/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
        }
      />

      {/* Suspense + Error Boundary Components */}
      <ErrorBoundary fallback={<p>¡Oops! Algo salió mal...</p>}>
        <Suspense fallback={<p>Cargando...</p>}>
          {data && <DataGrid data={data} />}
        </Suspense>
      </ErrorBoundary>

      {/* Custom Hook */}
      {loading && (
        <div>
          <span>Cargando...</span>
          <button type="button" onClick={handleCancelRequest}>
            Cancelar
          </button>
        </div>
      )}
      {error && <p>¡Oops! Algo salió mal...</p>}
      {users && <DataGrid data={users} />}
    </main>
  );
}

export default App;
