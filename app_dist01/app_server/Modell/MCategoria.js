'use strict'
var Sequelize = require('sequelize');
var cx = require("../Config/ConnectDB.js");

var Categoria = cx.sequelize.define('categoria', {
    id_categoria: {
		primaryKey:true,
		type:Sequelize.INTEGER,
		autoIncrement:true
	},
    name: Sequelize.STRING
});
module.exports.Categoria = Categoria;