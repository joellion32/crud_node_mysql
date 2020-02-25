const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const path = require('path');
const myConnection = require('express-myconnection');

// importar rutas 
const UserRoutes = require('../src/routes/UserRoutes');

const app = express();

// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
//Midlewares
app.use(morgan('dev'));

// Midleware para conectar a la BD
app.use(myConnection(mysql, {
host: 'localhost',
user: 'root',
password: '',
port: 3306,
database: 'crud_node'
}, 'single'));

//recibir parametros
app.use(express.urlencoded({extended: false}));

// rutas
app.use('/', UserRoutes);


// archivos estaticos agregar estilos
app.use(express.static(path.join(__dirname, 'public')))

// correr servidor 
app.listen(app.get('port'), () => {
console.log('servidor inicializado');
});