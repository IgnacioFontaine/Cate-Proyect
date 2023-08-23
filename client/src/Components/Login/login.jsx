const Login = () => {
  return (
    <div>
      <div>
        <form>
          <div>
            <h1>Login</h1>
          </div>
          <label>
            Nombre:
            <input type="text" placeholder="Nombre completo..." />
          </label>
          <label>
            Contraseña:
            <input type="password" placeholder="Contraseña..." />
          </label>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
