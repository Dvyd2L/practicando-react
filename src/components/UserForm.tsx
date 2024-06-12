import { useState } from "react";
import { IUser } from "../models/user";
import "./UserForm.tsx.css";

const UserForm = ({
  user,
  onSubmit,
}: {
  user?: IUser;
  onSubmit: (user: IUser) => Promise<Response>;
}) => {
  // Define estados para los valores del formulario
  const [id] = useState(user?.id ?? 0);
  const [nombre, setNombre] = useState(user?.nombre ?? "");
  const [apellido, setApellido] = useState(user?.apellido ?? "");
  const [dni, setDni] = useState(user?.dni ?? "");

  // Función para manejar el envío del formulario
  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const newUser: IUser = { id, nombre, apellido, dni };

    try {
      const response = await onSubmit(newUser);

      if (!response.ok)
        throw new Error(`Error ${response.status}: ${response.statusText}`);

      alert("Usuario creado/editado correctamente"); // TODO: cambiar por un toast o similar
      setNombre("");
      setApellido("");
      setDni("");
    } catch (error) {
      console.error({ error });
      error instanceof Error &&
        alert(`Error al crear/editar el usuario: ${error.message}`); // TODO: cambiar por un toast o similar
    }
  };

  return (
    <form onSubmit={async (e) => await handleSubmit(e.nativeEvent)}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="dni">DNI</label>
        <input
          type="text"
          name="dni"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default UserForm;
