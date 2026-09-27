import React, { useState } from 'react'

interface NuevoProductoInput {
    nombre: string
    precio: number
}

export function SubirProductos() {

    const [nombre, setNombre] = useState<string>('')
    const [precio, setPrecio] = useState<string>('')
    const [enviando, setEnviando] = useState<boolean>(false)

    const manejoEnvio = async (e: React.FormEvent) => {
        e.preventDefault()


        if (!nombre || !precio) return alert("Por favor llena los campos");

        const productoAEnviar: NuevoProductoInput = {
            nombre,
            precio: Number(precio)
        }

        try {
            setEnviando(true)

            const response = await fetch('http://26.132.165.0:3000/api/products',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productoAEnviar)
            })

            if (!response.ok) {
                throw new Error("Error al enviar");
            }

            const resultado = await response.json()
            console.log("Operacion exitosa ", resultado);

            alert("Producto agregado correctamente")

            setNombre('')
            setPrecio('')

        } catch (error) {
            console.error("Error al enviar el POST", error)
        } finally {
            setEnviando(false)
        }


    }

    return (
        <>
        
        <form onSubmit={manejoEnvio} style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '300px' }}>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div style={{marginTop: '10px'}}>
                <label>Precio:</label>
                <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>

            <button type='submit' disabled={enviando} style={{marginTop: '15px'}}>
                {enviando ? 'Guardando...' : 'Guardar Producto'}
            </button>
        </form>


        


        </>
    )
}
