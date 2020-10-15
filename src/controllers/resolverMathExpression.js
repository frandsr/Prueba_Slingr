const mathjs = require('mathjs')

let resolvedorDeExpresiones = {}

resolvedorDeExpresiones.resolverPeticion = async (req, res) => {
    const expression = req.params.expression || req.body.expression;
    const precision = req.params.precision || req.body.precision;
    try {

        const result = mathjs.evaluate(expression)
        const resultadoJson = precision ? result.toFixed(precision) : result
        res.json({ resultado: resultadoJson })
    } catch (error) {
        res.json({ resultado: "Expresion Ingresada Incorrecta" })
    }
}

module.exports = resolvedorDeExpresiones