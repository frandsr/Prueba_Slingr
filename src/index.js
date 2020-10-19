const express = require('express')

const app = express();
//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

//Rutas
app.get('/', async (req, res) => {
    res.json({ aplicacion: "Ejercicio para entrevista Slingr" })
})
app.use('/api', require('./routes/math_expressions'));
//Inicio de servidor
app.listen(app.get('port'), () => {
    console.log("Servidor en puerto " + app.get('port'));
});

module.exports = app