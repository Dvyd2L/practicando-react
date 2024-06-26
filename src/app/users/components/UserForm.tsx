import Btn from "@/app/common/components/Btn";
import { useUser } from "@/app/users/hooks/useUser.ts";
import type { IUser } from "@/app/users/models/user.js";
import styles from "./UserForm.module.css";
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
    <form
      className={styles["user-form"]}
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

      <Btn type="submit">Enviar</Btn>
    </form>
  );
};

export default UserForm;
