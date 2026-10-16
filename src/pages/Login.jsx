/**
 * src/pages/Login.jsx
 * -----------------------------------------------------------
 * Login SIMULADO. No hay backend ni validación real: el objetivo
 * es practicar navegación programática y rutas protegidas.
 *
 * Nunca implementes autenticación real así: las credenciales se
 * validan en el servidor, jamás en el cliente.
 */

import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

export function Login({ isAuthenticated, onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // ProtectedRoute nos mandó aquí guardando la ruta original en
  // location.state.from. Si el usuario llegó por su cuenta, no hay
  // state y lo mandamos al panel por defecto.
  const destino = location.state?.from?.pathname || "/admin";

  // Si ya hay sesión, no tiene sentido mostrar el formulario.
  if (isAuthenticated) {
    return <Navigate to={destino} replace />;
  }

  function handleSubmit(evento) {
    // Sin preventDefault el formulario recarga la página y se pierde
    // todo el estado de React (y con él, la "sesión").
    evento.preventDefault();

    const nombre = usuario.trim();

    if (nombre === "") {
      setError("Escribe un nombre de usuario para continuar.");
      return;
    }

    setError("");
    onLogin(nombre); // levanta el estado hasta App.jsx

    // Navegación programática: redirigimos como resultado de una
    // acción, no de un clic en un enlace. `replace` evita que el
    // botón "atrás" devuelva al formulario de login.
    navigate(destino, { replace: true });
  }

  return (
    <section className="pagina">
      <h1>Iniciar sesión</h1>
      <p>Cualquier nombre sirve: la autenticación es simulada.</p>

      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="usuario">Nombre de usuario</label>
        <input
          id="usuario"
          type="text"
          value={usuario}
          onChange={(evento) => setUsuario(evento.target.value)}
          placeholder="samuel"
          autoComplete="username"
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="boton-primario">
          Entrar
        </button>
      </form>
    </section>
  );
}

export default Login;
