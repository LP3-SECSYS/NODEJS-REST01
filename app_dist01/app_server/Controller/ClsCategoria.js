'use strict'
var mcategoria = require("../Modell/MCategoria.js");

exports.createCategoria = function (req, res){  
        return mcategoria.Categoria.create({
        id_categoria: '1',
        name: 'Lactios'
        });      
}