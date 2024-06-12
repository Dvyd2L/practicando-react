import { useEffect, useState } from "react";

export const useFetch = <T>(url: string, reqInit?: RequestInit) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [abortController, setAbortController] = useState<AbortController>();
  const handleCancelRequest = () => abortController && abortController.abort();

  useEffect(() => {
    const controller = new AbortController();
    setAbortController(controller);
    setLoading(true);
    setError(undefined); // Borrar errores al comienzo de una petición
    fetch(url, {
      ...reqInit,
      signal: controller.signal,
    })
      .then((res) => res.ok && res.json())
      .then(setData)
      .catch((error) => error.name !== "AbortError" && setError(error))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [url, reqInit]);

  return { data, loading, error, handleCancelRequest };
};