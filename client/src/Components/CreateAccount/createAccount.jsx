const CreateAccount = () => {
  return (
    <div>
      <div>
        <h1>Bienvenido</h1>
        <p>Crea tu cuenta en el Grupo Juvenil La Catedral</p>
      </div>
      <div>
        <form>
          <label>
            Nombre:
            <input type="text" placeholder="Nombre completo..." />
          </label>
          <label>
            Contraseña:
            <input type="password" placeholder="Contraseña..." />
          </label>
          <label>
            Email:
            <input type="text" placeholder="Email..." />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
