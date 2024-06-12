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
      default:
        return result.value;
    }
  };
  return { read };
};

export const fetchData = <T>(url: string | URL) => {
  if (!(url instanceof URL)) url = new URL(url);
  const data = fetch(url.href)
    .then((res) => res.ok && res.json())
    .catch(console.error);
  return getSuspender<T>(data);
};
