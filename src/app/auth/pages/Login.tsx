import Btn from "@/app/common/components/Btn";
import "./Login.module.css";
const Login = () => {
  return (
    <>
      <h1>Iniciar sesión</h1>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const data = new FormData(ev.currentTarget);
          const username = data.get("username");
          const password = data.get("password");
          localStorage.setItem("user", JSON.stringify({ username, password }));
          window.location.href = "/users";
        }}
      >
        <div>
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            placeholder="Usuario"
            name="username"
            id="usuario"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            id="password"
          />
        </div>
        <Btn>Iniciar sesión</Btn>
      </form>
    </>
  );
};
export default Login;
