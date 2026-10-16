/**
 * src/pages/ProductDetail.jsx
 * -----------------------------------------------------------
 * Vista de detalle. Es EL ejemplo de parámetro dinámico:
 *
 *   <Route path="/productos/:id" element={<ProductDetail />} />
 *
 * El nombre después de los dos puntos (`:id`) es el que aparece
 * como clave en el objeto que devuelve useParams().
 */

import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById } from "../data/products";

const formatoCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function ProductDetail() {
  // useParams() devuelve un objeto con todos los segmentos dinámicos.
  // OJO: sus valores SIEMPRE son strings, incluso si la URL es /productos/12.
  const { id } = useParams();

  // useNavigate() para el botón "volver": necesitamos navegar como
  // consecuencia de un evento (clic en un <button>), no de un enlace.
  const navigate = useNavigate();

  const producto = getProductById(id);

  // Caso de "existe la ruta, pero no el recurso". Es distinto del 404
  // global: la ruta /productos/:id SÍ coincidió, simplemente no hay
  // un producto con ese id.
  if (!producto) {
    return (
      <section className="pagina">
        <h1>Producto no disponible</h1>
        <p>
          No existe ningún producto con el id <code>{id}</code>.
        </p>
        <Link to="/productos" className="boton-primario">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="pagina">
      {/*
        navigate(-1) retrocede una entrada en el historial, igual que
        el botón "atrás" del navegador. Con un número positivo avanza.
      */}
      <button type="button" className="boton-texto" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <h1>{producto.nombre}</h1>
      <p className="meta">
        {producto.categoria} · id leído con useParams: <code>{id}</code>
      </p>

      <p>{producto.descripcion}</p>

      <p className="precio-grande">{formatoCOP.format(producto.precio)}</p>

      <p className={producto.stock > 0 ? "stock-ok" : "stock-agotado"}>
        {producto.stock > 0
          ? `Disponible: ${producto.stock} unidades`
          : "Sin unidades disponibles"}
      </p>

      <Link to="/productos">Ver todo el catálogo</Link>
    </section>
  );
}

export default ProductDetail;
