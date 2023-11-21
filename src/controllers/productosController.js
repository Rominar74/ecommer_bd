const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");



const Productos = db.Producto;
const Usuarios = db.Usuario;

const productosController = {
    "list": (req, res) =>{
        db.Producto.findAll({
           include: ["usuario"] 
        })
        .then((productos) => {
            res.render("productosList.ejs", (productos))
        })
        
    },
}

module.exports = productosController;