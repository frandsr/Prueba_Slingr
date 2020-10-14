const { Router } = require('express')
const router = Router();

//RUTAS GET
router.get('/:expression', async (req, res) => {
    res.json({ expresion: req.params.expression })
})
router.get('/:expression/:precision', async (req, res) => {

    res.json({ expresion: req.params.expression, precision: req.params.precision })
})

//RUTAS POST
router.post('/', async (req, res) => {
    const expression = req.body.expression;
    const precision = req.body.precision;

    res.json({ expresion: expression, precision: precision })
})


module.exports = router
