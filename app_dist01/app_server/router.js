var clscat = require('./Controller/ClsCategoria.js')
module.exports = function(app) {

	// devolver todos los Personas
	app.get('/', function(req, res){
        res.json({name:'Jhopes',apellidos:'P'});
    });
	app.post('/api/categoria', clscat.createCategoria);
	/*
    // Modificar los datos de una Persona    
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});*/
};