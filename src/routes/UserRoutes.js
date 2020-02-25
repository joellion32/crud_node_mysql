const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController');

// rutas

// para mostrar datos
router.get('/', UserController.index);

// para guardar los datos
router.post('/guardar', UserController.guardar);


// para editar los datos
router.get('/editar/:id', UserController.editar);


// para actualizar los datos
router.post('/actualizar/:id', UserController.actualizar);


// para eliminar datos
router.get('/eliminar/:id', UserController.eliminar);



module.exports = router;