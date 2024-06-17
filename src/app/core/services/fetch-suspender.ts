enum SuspenderStates {
  pending = "pending",
  success = "success",
  error = "error",
}
interface SuspenderResult<T> {
  state: SuspenderStates;
  value?: T;
  error?: Error;
}
const getSuspender = <T>(promise: Promise<T>) => {
  const result: SuspenderResult<T> = { state: SuspenderStates.pending };
  const suspender = promise.then(
    (val) => {
      result.state = SuspenderStates.success;
      result.value = val;
    },
    (err) => {
      result.state = SuspenderStates.error;
      result.error = err;
    }
  );
  const read = () => {
    switch (true) {
      case result.state === SuspenderStates.pending:
        throw suspender;
      case result.state === SuspenderStates.error:
        throw result.error;
        case result.state === SuspenderStates.success:
          return result.value;
        default:
          throw new Error("Unhandled state");
    }
  };
  return { read };
};
export const fetchSuspender = <T>(url: string | URL, requestInit?: RequestInit) => {
  if (!(url instanceof URL)) url = new URL(url);
  const data = fetch(url.href, requestInit)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
  return getSuspender<T>(data);
};
