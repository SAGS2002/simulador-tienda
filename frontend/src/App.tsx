import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Nota: En React/Vite no hace falta poner la extensión .tsx en las importaciones
import { CargarProductos } from './Pages/CargarProductos'; 
import { SubirProductos } from './Pages/SubirProductos';

// 1. Creamos un componente específico para tu página principal
function Inicio() {
  return <h1 className="p-8 text-3xl font-bold">Bienvenido al Inicio</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-900 text-white p-4 flex gap-6">
        <Link to="/" className="hover:text-blue-400 font-semibold">Inicio</Link>
        <Link to="/productos" className="hover:text-blue-400 font-semibold">Catálogo</Link>
        <Link to="/guardar" className="hover:text-blue-400 font-semibold">Guardar nuevo</Link>
      </nav>

      <main>
        <Routes>
          {/* 2. Asignamos el componente Inicio a la ruta raíz */}
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<CargarProductos />} />
          <Route path="/guardar" element={<SubirProductos />} />
          
          <Route path="*" element={<h1 className="p-8 text-red-500 font-bold">Página no encontrada</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}