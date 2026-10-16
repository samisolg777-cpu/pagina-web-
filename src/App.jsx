/**
 * src/App.jsx
 * -----------------------------------------------------------
 * Centro de la aplicación:
 *   1. Guarda el estado de autenticación simulado (useState).
 *   2. Declara el mapa completo de rutas.
 *
 * El estado vive AQUÍ porque es el ancestro común más cercano de
 * todos los componentes que lo necesitan (Navbar, Login, Admin,
 * ProtectedRoute). Eso es "levantar el estado" (lifting state up).
 *
 * En un proyecto grande esto se movería a un Context o a un store
 * (Zustand, Redux) para no ir pasando props por toda la jerarquía.
 */

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRouter .jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  // `user` guarda el nombre; `null` significa "sin sesión".
  const [user, setUser] = useState(null);

  // Derivamos el booleano del estado en vez de guardarlo aparte.
  // Dos useState separados podrían desincronizarse; uno derivado, no.
  const isAuthenticated = user !== null;

  const handleLogin = (nombre) => setUser(nombre);
  const handleLogout = () => setUser(null);

  return (
    <div className="app">
      {/* Navbar va FUERA de <Routes> para que se vea en todas las vistas */}
      <Navbar isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />

      <main className="contenido">
        <Routes>
          {/* 1. Inicio */}
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} user={user} />} />

          {/* 2. Listado estático */}
          <Route path="/productos" element={<Products />} />

          {/*
            3. Ruta dinámica. Es una ruta hermana de /productos, no
            anidada: cada una renderiza su propia página completa.
          */}
          <Route path="/productos/:id" element={<ProductDetail />} />

          {/* 4. Login */}
          <Route
            path="/login"
            element={<Login isAuthenticated={isAuthenticated} onLogin={handleLogin} />}
          />

          {/*
            5. Ruta protegida: el guardián envuelve al elemento.
            Si isAuthenticated es false, ProtectedRoute devuelve un
            <Navigate to="/login" /> y Admin nunca llega a montarse.
          */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Admin user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          {/* 6. Comodín: captura cualquier URL que no coincidió arriba */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
