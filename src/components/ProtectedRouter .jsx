/**
 * src/components/ProtectedRoute.jsx
 * -----------------------------------------------------------
 * Componente "guardián" (guard). No es una feature nativa de
 * React Router: es simplemente un componente que decide, en su
 * render, si deja pasar a sus hijos o si redirige.
 *
 * Patrón: composición. Se usa envolviendo el elemento de la ruta:
 *
 *   <Route
 *     path="/admin"
 *     element={
 *       <ProtectedRoute isAuthenticated={isAuthenticated}>
 *         <Admin />
 *       </ProtectedRoute>
 *     }
 *   />
 */

import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ isAuthenticated, children, redirectTo = "/login" }) {
  // useLocation() nos da la ruta que el usuario INTENTABA visitar.
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={redirectTo}
        // `replace` sustituye la entrada actual del historial en vez de
        // apilarla. Sin esto, el botón "atrás" del navegador devolvería
        // al usuario a /admin, que lo volvería a expulsar a /login:
        // un bucle molesto.
        replace
        // Guardamos de dónde venía para poder devolverlo ahí después
        // del login exitoso (lo leemos en Login.jsx con useLocation).
        state={{ from: location }}
      />
    );
  }

  // Autenticado: renderizamos el contenido protegido tal cual.
  return children;
}

export default ProtectedRoute;
