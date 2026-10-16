/**
 * src/pages/Home.jsx
 * -----------------------------------------------------------
 * Página de inicio. Aquí usamos Link (no NavLink) porque son
 * enlaces de contenido, no ítems de menú: no necesitan marcar
 * estado activo.
 */

import { Link } from "react-router-dom";

export function Home({ isAuthenticated, user }) {
  return (
    <section className="pagina">
      <h1>Tienda Demo</h1>

      <p>
        SPA de ejemplo para practicar enrutamiento con React Router: rutas
        básicas, parámetros dinámicos, rutas protegidas y página 404.
      </p>

      <p>
        {isAuthenticated
          ? `Sesión activa como ${user}. Ya tienes acceso al panel de administración.`
          : "No has iniciado sesión. El panel de administración te redirigirá al login."}
      </p>

      <div className="acciones">
        <Link to="/productos" className="boton-primario">
          Ver productos
        </Link>

        {!isAuthenticated && (
          <Link to="/login" className="boton-secundario">
            Iniciar sesión
          </Link>
        )}
      </div>
    </section>
  );
}

export default Home;
