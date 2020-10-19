const { Router } = require('express')
const { resolverPeticion } = require('../controllers/resolverMathExpression')

const router = Router();

//RUTAS GET
router.get('/', resolverPeticion)

//RUTAS POST
router.post('/', resolverPeticion)

module.exports = router
