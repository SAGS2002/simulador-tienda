import { useEffect, useState } from 'react'

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface respuestaAPI {
  success: boolean;
  data: Producto[]
}

export function App() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [cargando, setCargando] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        setCargando(true)

        const response = await fetch('http://26.132.165.0:3000/api/products')

        if (!response.ok) {
          throw new Error("Error al conectar");

        }

        const datos: respuestaAPI = await response.json()
        setProductos(datos.data)
        console.log(datos)

      } catch (err: any) {
        setError(err.message || "error de conexion")
      } finally {
        setCargando(false)
      }

    }
    obtenerProductos()
  }, [])


  if (cargando) return <p>Cargando Inventario...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <>

      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>Inventario Tienda</h2>
        {productos.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {productos.map((producto) => (
              <li
                key={producto.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '10px',
                  maxWidth: '300px'
                }}
              >
                <h3>{producto.nombre}</h3>
                <p><strong>Precio:</strong>{producto.precio}</p>
              </li>
            ))}
          </ul>
        )
        }

      </div>

    </>
  )
}