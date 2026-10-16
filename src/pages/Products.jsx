/**
 * src/pages/Products.jsx
 * -----------------------------------------------------------
 * Listado estático de productos.
 *
 * Cada tarjeta enlaza a /productos/:id construyendo la URL con
 * template literal. Ese `id` es exactamente lo que leerá
 * ProductDetail con useParams().
 */

import { Link } from "react-router-dom";
import { products } from "../data/products";

// Formateador de moneda colombiana. Se crea una sola vez, fuera del
// componente, para no reconstruirlo en cada render.
const formatoCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function Products() {
  return (
    <section className="pagina">
      <h1>Productos</h1>
      <p>{products.length} artículos disponibles en el catálogo.</p>

      <ul className="lista-productos">
        {products.map((producto) => (
          // `key` debe ser estable y única: el id es perfecto.
          // Nunca uses el índice del array si la lista puede reordenarse.
          <li key={producto.id} className="tarjeta">
            <div>
              <h2>
                <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
              </h2>
              <p className="meta">{producto.categoria}</p>
            </div>

            <div className="tarjeta-precio">
              <strong>{formatoCOP.format(producto.precio)}</strong>
              <span className={producto.stock > 0 ? "stock-ok" : "stock-agotado"}>
                {producto.stock > 0 ? `${producto.stock} en stock` : "Agotado"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
