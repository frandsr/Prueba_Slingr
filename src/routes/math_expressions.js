const { Router } = require('express')
const mathjs = require('mathjs')
const router = Router();


//RUTAS GET
router.get('/:expression', async (req, res) => {
    const expression = req.params.expression;
    try {
        const result = mathjs.evaluate(expression)
        const resultadoJson = result
        res.json({ resultado: resultadoJson })
    } catch (error) {
        res.json({ resultado: "Expresion Ingresada Incorrecta" })
    }
})
router.get('/:expression/:precision', async (req, res) => {
    const expression = req.params.expression;
    const precision = req.params.precision;
    try {
        const result = mathjs.evaluate(expression)
        const resultadoJson = precision ? result.toFixed(precision) : result
        res.json({ resultado: resultadoJson })
    } catch (error) {
        res.json({ resultado: "Expresion Ingresada Incorrecta" })
    }
})

//RUTAS POST
router.post('/', async (req, res) => {
    const expression = req.body.expression;
    const precision = req.body.precision;
    try {
        const result = mathjs.evaluate(expression)
        const resultadoJson = precision ? result.toFixed(precision) : result
        res.json({ resultado: resultadoJson })
    } catch (error) {
        res.json({ resultado: "Expresion Ingresada Incorrecta" })
    }
})

module.exports = router
