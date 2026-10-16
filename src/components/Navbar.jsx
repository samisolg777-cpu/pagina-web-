/**
 * src/components/Navbar.jsx
 * -----------------------------------------------------------
 * Menú de navegación.
 *
 * Usamos NavLink (no <a>, no Link) porque NavLink expone el
 * estado `isActive` y nos deja marcar visualmente en qué sección
 * estamos parados. Link sirve igual para navegar, pero no sabe
 * si está activo o no.
 */

import { NavLink, useNavigate } from "react-router-dom";

export function Navbar({ isAuthenticated, user, onLogout }) {
  const navigate = useNavigate();

  /**
   * NavLink acepta una FUNCIÓN en className que recibe { isActive }.
   * Devolvemos la clase "activo" solo cuando la ruta coincide.
   */
  const linkClass = ({ isActive }) => (isActive ? "nav-link activo" : "nav-link");

  function handleLogout() {
    onLogout();
    // Navegación programática: al cerrar sesión no queremos dejar al
    // usuario parado en una vista que ya no le corresponde.
    navigate("/", { replace: true });
  }

  return (
    <header className="navbar">
      <nav className="navbar-links">
        {/*
          `end` hace que "/" solo se marque activo en la ruta exacta.
          Sin `end`, "/" coincidiría también con "/productos" y
          "/admin", porque todas empiezan por "/".
        */}
        <NavLink to="/" className={linkClass} end>
          Inicio
        </NavLink>

        <NavLink to="/productos" className={linkClass}>
          Productos
        </NavLink>

        <NavLink to="/admin" className={linkClass}>
          Administración
        </NavLink>
      </nav>

      <div className="navbar-sesion">
        {isAuthenticated ? (
          <>
            <span className="navbar-usuario">Hola, {user}</span>
            <button type="button" className="boton-secundario" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <NavLink to="/login" className={linkClass}>
            Iniciar sesión
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Navbar;
