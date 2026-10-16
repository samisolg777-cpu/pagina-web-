/**
 * src/main.jsx
 * -----------------------------------------------------------
 * Punto de entrada de la aplicación (el que Vite carga desde
 * index.html).
 *
 * Aquí es donde va BrowserRouter, y va UNA SOLA VEZ, envolviendo
 * toda la app. Es el que provee el contexto de enrutamiento: sin
 * él, cualquier hook de React Router (useParams, useNavigate...)
 * lanza un error en tiempo de ejecución.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*
      BrowserRouter usa la History API del navegador (URLs limpias
      tipo /productos/3).

      Alternativa: HashRouter (URLs tipo /#/productos/3). Úsalo si
      vas a desplegar en un hosting estático que no puedes configurar
      para devolver index.html en cualquier ruta — si no, al recargar
      con F5 en /productos/3 el servidor daría un 404 real.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
