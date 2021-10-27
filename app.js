const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const bodyParser = require('body-parser');
const rutaCrear = require('./crearUsuario');

// config puerto
const app = express();
app.set('port', process.env.PORT || 9000);
//parametros de database
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'',
    database: 'registro'
}
//middlewares
//configuraciones modulo
app.use(myconn(mysql,dbOptions,'single'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// rutas
app.get('/',(req,res)=>{
    res.send('Pagina de inicio de DAvid');
})
app.use('/vista',rutaCrear);// ruta para crear usuario

//inciar servidor
app.listen(app.get('port'), ()=>{
    console.log('Inicio del servidor en el puerto: ', app.get('port'));
})
