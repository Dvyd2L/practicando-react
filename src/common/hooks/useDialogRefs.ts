import { useCallback, useRef } from "react";

export const useDialogRefs = () => {
  const dialogRefs = useRef<Map<number, HTMLDialogElement>>(new Map());
  /**
   * Obtiene el diálogo por su clave del mapa de referencias de diálogos
   * @param id clave de la referencia
   * @returns la referencia al elemento diálogo en caso de encontrarla, sino undefined
   */
  const getDialog = useCallback((id = 0) => dialogRefs.current.get(id), []);
  /**
   * Asigna la referencia del diálogo al mapa usando el ID como clave
   * @param id clave de la referencia
   * @param dialog Elemento diálogo
   * @returns el mapa de diálogos actualizado
   */
  const setDialog = useCallback(
    (id = 0, dialog: HTMLDialogElement) => dialogRefs.current.set(id, dialog),
    []
  );

  return {
    dialogRefs,
    getDialog,
    setDialog,
  };
};
