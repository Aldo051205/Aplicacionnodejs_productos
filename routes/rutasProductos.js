var rutas = require("express").Router();
var {mostrarProductos,borrarProducto,buscarPorID,nuevoProducto} = require("../db/productosDB");


rutas.get("/", async (req,res)=>{
    var productoValido = await mostrarProductos();
    console.log(productoValido);
    res.json(productoValido);
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
    productoValido = await buscarPorID(req.params.id);
    res.json(productoValido);
});

rutas.get("/borrarProducto/:id",async(req,res)=>{
    var productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

rutas.post("/nuevoProducto",async(req,res)=>{
    var productoValido = await nuevoProducto (req.body);
    res.json(productoValido);
});



module.exports = rutas;