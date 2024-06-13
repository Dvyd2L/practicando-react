import { useCallback, useEffect, useState } from "react";
import { IUser } from "../models/user";

export const useUser = (initialUser?: IUser) => {
  const [id, setId] = useState(initialUser?.id ?? 0);
  const [nombre, setNombre] = useState(initialUser?.nombre ?? "");
  const [apellido, setApellido] = useState(initialUser?.apellido ?? "");
  const [dni, setDni] = useState(initialUser?.dni ?? "");

  const isUser = (obj: object): obj is IUser =>
    "id" in obj && "nombre" in obj && "apellido" in obj && "dni" in obj;
  const setUser = useCallback((user?: IUser) => {
    setId(user?.id ?? 0);
    setNombre(user?.nombre ?? "");
    setApellido(user?.apellido ?? "");
    setDni(user?.dni ?? "");
  }, []);

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser, setUser]);

  return { user: { id, nombre, apellido, dni }, setNombre, setApellido, setDni, setUser, isUser };
};
