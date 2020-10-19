const mathjs = require('mathjs')

let resolvedorDeExpresiones = {}

resolvedorDeExpresiones.resolverPeticion = async (req, res) => {
    const expression = req.query.expression || req.body.expression;
    const precision = req.query.precision || req.body.precision;
    console.log(expression);
    console.log(precision);
    try {

        const result = mathjs.evaluate(expression)
        const resultadoJson = precision ? result.toFixed(precision) : result
        res.status(200).json({ resultado: resultadoJson })
    } catch (error) {
        res.status(400).json({ resultado: "Expresion Ingresada Incorrecta" })
    }
}

module.exports = resolvedorDeExpresiones