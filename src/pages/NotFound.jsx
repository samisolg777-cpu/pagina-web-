/**
 * src/pages/NotFound.jsx
 * -----------------------------------------------------------
 * Página 404. Se monta desde la ruta comodín:
 *
 *   <Route path="*" element={<NotFound />} />
 *
 * En React Router v6+ el orden de declaración ya no determina el
 * match (hay un algoritmo de ranking por especificidad), pero por
 * convención el comodín se escribe al final para que se lea claro.
 */

import { Link, useLocation, useNavigate } from "react-router-dom";

export function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="pagina">
      <h1>404</h1>
      <p>
        La ruta <code>{location.pathname}</code> no existe en esta aplicación.
      </p>

      <div className="acciones">
        <Link to="/" className="boton-primario">
          Ir al inicio
        </Link>
        <button type="button" className="boton-secundario" onClick={() => navigate(-1)}>
          Volver atrás
        </button>
      </div>
    </section>
  );
}

export default NotFound;
