const express = require('express');
const cors = require('cors');
const app = express();

// Habilita CORS para todos los orígenes
app.use(cors());

// Endpoint modificado para interactuar con el ID de la URL
app.get('/products/:id', (req, res) => {
    const productId = req.params.id; 
    res.json({ 
        msg: 'Hello world!',
        productId: productId 
    });
});

app.get('/', (req, res) => {
    res.send('A josue le gusta manuel');
});
// Arranca el servidor
app.listen(3000, () => {
    console.log('Web server listening on port 3000');
});