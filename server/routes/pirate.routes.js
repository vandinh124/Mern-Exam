const PirateController = require('../controllers/pirate.controller')

const { authenticate } = require('../config/jwt.config')
module.exports = function (app){
    app.post('/api/pirates', PirateController.createPirate); 
    app.get('/api/pirates', authenticate, PirateController.getAll);
    app.get('/api/pirates/:id', PirateController.getOne);
    app.delete('/api/pirates/:id', PirateController.delete);
}