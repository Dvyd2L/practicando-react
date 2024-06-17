import { createContext, useContext } from "react";

export const createContextFactory = <T,>(propsProvider: () => T) => {
  const GenericContext = createContext<T | undefined>(undefined);

  const useGenericContext = () => {
    const context = useContext(GenericContext);
    if (!context) {
      throw new Error(
        "useGenericContext must be used within a GenericProvider"
      );
    }
    return context;
  };

  const GenericProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return (
      <GenericContext.Provider value={{ ...propsProvider() }}>
        {children}
      </GenericContext.Provider>
    );
  };

  return { GenericProvider, useGenericContext };
};
