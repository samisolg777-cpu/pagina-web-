/**
 * src/data/products.js
 * -----------------------------------------------------------
 * "Base de datos" simulada. En un proyecto real estos datos
 * vendrían de una API (fetch / axios), pero la lógica de rutas
 * es exactamente la misma.
 *
 * IMPORTANTE: el `id` se define como STRING a propósito.
 * Los parámetros de useParams() SIEMPRE llegan como string,
 * así que guardarlos como string evita tener que hacer
 * conversiones (o caer en el bug de comparar 1 === "1").
 */

export const products = [
  {
    id: "1",
    nombre: "Teclado mecánico RGB",
    precio: 180000,
    categoria: "Periféricos",
    stock: 12,
    descripcion:
      "Switches rojos lineales, retroiluminación RGB por tecla y estructura de aluminio. Ideal para programar de noche sin despertar a nadie.",
  },
  {
    id: "2",
    nombre: "Mouse inalámbrico ergonómico",
    precio: 65000,
    categoria: "Periféricos",
    stock: 30,
    descripcion:
      "Sensor óptico de 4000 DPI, conexión por dongle USB de 2.4 GHz y hasta 60 días de batería con una sola pila AA.",
  },
  {
    id: "3",
    nombre: 'Monitor IPS 24"',
    precio: 620000,
    categoria: "Monitores",
    stock: 5,
    descripcion:
      "Panel IPS Full HD a 75 Hz con marcos delgados y soporte VESA. Colores consistentes desde cualquier ángulo.",
  },
  {
    id: "4",
    nombre: "Audífonos over-ear",
    precio: 240000,
    categoria: "Audio",
    stock: 0,
    descripcion:
      "Cancelación activa de ruido, almohadillas de espuma viscoelástica y 35 horas de reproducción continua.",
  },
  {
    id: "5",
    nombre: "SSD NVMe 1 TB",
    precio: 320000,
    categoria: "Almacenamiento",
    stock: 18,
    descripcion:
      "Lectura secuencial de hasta 3500 MB/s. El upgrade que más se siente en un computador viejo.",
  },
];

/**
 * Helper para buscar un producto por su id.
 * Lo centralizamos aquí para no repetir el .find() en cada página.
 * Devuelve `undefined` si no existe (la página decide qué mostrar).
 */
export function getProductById(id) {
  return products.find((producto) => producto.id === id);
}

export default products;
