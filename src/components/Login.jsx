

const Login = () => {
  return (
    <form onSubmit={''} className="login">
        <label for="username">Usuario:</label>
          <br />
          <input id="username" name="username" type="text" required minlength="3" maxlength="20" />
          <br />
          <label for="pw">Contraseña:</label>
          <br />
          <input id="pw" name="pw" type="password" required minlength="8" maxlength="20" />
          <br />
          <input type="submit" value="Entrar" />
          <hr />
          <a href="google.com">Crea una cuenta</a>
          <br />
          <a href="google.com">¿Olvidaste tu contraseña?</a>
    </form>
  )
}

export default Login