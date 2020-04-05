const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ngos', OngController.index);
routes.post('/ngos', OngController.create);

routes.get('/ngos/incidents', ProfileController.index);


routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;
