import ErrorComponent from "@/common/components/Error.tsx";
import ErrorBoundary from "@/common/components/ErrorBoundary.ts";
import Loading from "@/common/components/Loading.tsx";
import { useUser } from "@/users/hooks/useUser.ts";
import type { IUser } from "@/users/models/user.js";
import { Suspense } from "react";
import "./UserForm.module.css";
const UserForm = ({
  user,
  handleSubmit,
}: {
  user?: IUser;
  handleSubmit: (user: IUser) => Promise<void>;
}) => {
  const {
    user: usuario,
    setNombre,
    setApellido,
    setDni,
    setUser,
  } = useUser(user);

  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <Suspense fallback={<Loading />}>
        <form
          onSubmit={async () => {
            await handleSubmit(usuario);
            setUser();
          }}
        >
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={usuario.nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              value={usuario.apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="dni">DNI</label>
            <input
              type="text"
              name="dni"
              id="dni"
              value={usuario.dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </Suspense>
    </ErrorBoundary>
  );
};

export default UserForm;
