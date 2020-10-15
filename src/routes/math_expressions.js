const { Router } = require('express')
const { resolverPeticion } = require('../controllers/resolverMathExpression')

const router = Router();


//RUTAS GET
router.get('/', async (req, res) => {
    res.json({ aplicacion: "Ejercicio para entrevista Slingr" })
})
router.get('/:expression', resolverPeticion)
router.get('/:expression/:precision', resolverPeticion)

//RUTAS POST
router.post('/', resolverPeticion)

module.exports = router
