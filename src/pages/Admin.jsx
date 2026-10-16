/**
 * src/pages/Admin.jsx
 * -----------------------------------------------------------
 * Vista protegida. Fíjate en algo importante: este componente NO
 * comprueba la autenticación. Esa responsabilidad es de
 * ProtectedRoute.
 *
 * Separar responsabilidades así hace que Admin sea más simple y
 * que el guardián se pueda reutilizar en cualquier otra ruta.
 */

import { Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";

function Admin({ user, onLogout }) {
  const navigate = useNavigate();

  const totalStock = products.reduce((suma, p) => suma + p.stock, 0);
  const agotados = products.filter((p) => p.stock === 0).length;

  function handleLogout() {
    onLogout();
    navigate("/", { replace: true });
  }

  return (
    <section className="pagina">
      <h1>Panel de administración</h1>
      <p>Sesión iniciada como {user}. Esta vista no es accesible sin autenticación.</p>

      <dl className="metricas">
        <div>
          <dt>Productos</dt>
          <dd>{products.length}</dd>
        </div>
        <div>
          <dt>Unidades en inventario</dt>
          <dd>{totalStock}</dd>
        </div>
        <div>
          <dt>Referencias agotadas</dt>
          <dd>{agotados}</dd>
        </div>
      </dl>

      <div className="acciones">
        <Link to="/productos" className="boton-secundario">
          Ir al catálogo
        </Link>
        <button type="button" className="boton-primario" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </section>
  );
}

export default Admin;
