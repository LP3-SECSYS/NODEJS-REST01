var clssuma = require('./Controller/ClsSuma.js')
module.exports = function(app) {

	// devolver todos los Personas
	app.get('/suma', function(req, res){
        res.json({name:'Jhopes',apellidos:'Dominguez fff'});
    });
	// Crear una nueva Persona
	/*app.post('/api/persona', Controller.setPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});*/
};