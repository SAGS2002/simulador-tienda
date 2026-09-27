const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());

let listaProductos = [
    { id: 1, nombre: 'Josue se vende por: ', precio: 800 },
    { id: 2, nombre: 'Manuel se vende por: ', precio: 25 },
    { id: 3, nombre: 'Pedro se vende por: ', precio: 75 }
    ];

app.get('/api/products', (req, res) => {
    res.json(listaProductos);

  // Enviamos la respuesta al frontend con un estado 200 OK y los datos en JSON
    res.status(200).json({
    success: true,
    data: listaProductos
    });
});

app.post('/api/products', (req, res) => {
    const { nombre, precio } = req.body;

    const nuevoProducto = {
        id: listaProductos.length > 0 ? listaProductos[listaProductos.length - 1].id + 1 : 1,
        nombre,
        precio: Number(precio)
    };

    listaProductos.push(nuevoProducto); // Modifica la lista global

    res.status(201).json({
        mensaje: "Producto agregado",
        producto: nuevoProducto
    });
});

app.get('/', (req, res) => { //mensaje que se enviara al
    res.send('Servidor funcional!');
});

// Arranca el servidor
app.listen(3000, () => {
    console.log('Web server listening on port 3000');
});