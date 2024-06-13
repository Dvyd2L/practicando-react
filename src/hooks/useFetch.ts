import { useCallback, useEffect, useState } from "react";

export const useFetch = <T>(url: string, reqInit?: RequestInit) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [controller, setController] = useState<AbortController>();
  
  const fetchApi = useCallback(async () => {
    const abortController = new AbortController();

    setLoading(true);
    setError(undefined); // Borrar errores al comienzo de una petición
    setController(abortController)

    try {
      const res = await fetch(url, {
        ...reqInit,
        signal: abortController.signal,
      });
      if (!res.ok) throw new Error(res.statusText);
      const result = await res.json();
      setData(result);
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }, [url, reqInit]);

  useEffect(() => {
    fetchApi();
    return controller?.abort;
  }, [url, reqInit, fetchApi, controller?.abort]);

  return { data, loading, error, fetchApi, handleCancelRequest: controller?.abort };
};
