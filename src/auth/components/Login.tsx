import "./Login.module.css";
const Login = () => {
  return (
    <>
      <h1>Iniciar sesión</h1>
      <form>
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
        <button>Iniciar sesión</button>
      </form>
    </>
  );
};
export default Login;
