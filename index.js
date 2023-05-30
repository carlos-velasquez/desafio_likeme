const { guardarPost, obtenerRegistros } = require('./consultas.js');

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, console.log('servidor encendido'));

app.get('/posts', async (req, res) => {
    const posts = await obtenerRegistros();
    res.json(posts)
})

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion} = req.body;
    await guardarPost(titulo, url, descripcion);
    res.send('Post agregado');
})