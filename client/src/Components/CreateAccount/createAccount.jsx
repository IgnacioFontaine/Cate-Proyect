const CreateAccount = () => {
  return (
    <div>
      <div>
        <h1>Bienvenido</h1>
        <p>Crea tu cuenta en el Grupo Juvenil La Catedral</p>
      </div>
      <div>
        <form>
          <label placeholder="Nombre completo...">
            <input type="text" />
          </label>
          <label placeholder="Contraseña...">
            <input type="password" />
          </label>
          <label placeholder="Email...">
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
