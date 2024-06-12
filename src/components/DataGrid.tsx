import { useRef } from "react";
import { IUser } from "../models/user";
import "./DataGrid.tsx.css";
import UserForm from "./UserForm";

const handleClick = async (obj: { id: number }, method: "PUT" | "DELETE") => {
  try {
    const res = await fetch(`http://localhost:8080/api/users/${obj.id}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method === "PUT" ? JSON.stringify(obj) : undefined,
    });
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error({ error });
  }
};

const isUser = (obj: object): obj is IUser =>
  "id" in obj && "nombre" in obj && "apellido" in obj && "dni" in obj;

const DataGrid = <T extends { id: number }>({ data }: { data: T[] }) => {
  // Mapa para almacenar las referencias de los diálogos
  const dialogRefs = useRef<Map<number, HTMLDialogElement>>(new Map());

  // Función para abrir el diálogo correspondiente
  const openDialog = (id: number) => {
    dialogRefs.current.get(id)?.show();
  };

  // Función para cerrar el diálogo correspondiente
  const closeDialog = (id: number) => {
    dialogRefs.current.get(id)?.close();
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {data &&
              data[0] &&
              Object.keys(data[0]).map((key, idx) => <th key={idx}>{key}</th>)}
            <th key={crypto.randomUUID()}></th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.length &&
            data.map((obj, rowIdx) => (
              <>
                <tr key={rowIdx}>
                  {Object.values(obj).map((val, colIdx) => (
                    <td key={colIdx}>{String(val)}</td>
                  ))}
                  <td key={obj.id}>
                    <button type="button" onClick={() => openDialog(obj.id)}>
                      Actualizar
                    </button>

                    <button
                      type="button"
                      onClick={() => handleClick(obj, "DELETE")}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>

                {isUser(obj) && (
                  <dialog
                    ref={(el) => {
                      // Asigna la referencia del diálogo al mapa usando el ID como clave
                      if (el) dialogRefs.current.set(obj.id, el);
                    }}
                    key={obj.id}
                  >
                    <button type="button" onClick={() => closeDialog(obj.id)}>
                      Cerrar
                    </button>
                    <UserForm
                      user={obj}
                      onSubmit={async (user: IUser) =>
                        await fetch(
                          "http://localhost:8080/api/users/" + obj.id,
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(user),
                          }
                        )
                      }
                    />
                  </dialog>
                )}
              </>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default DataGrid;
