const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

/**
 *  Metodos HTTP:
 *  GET: Busca/listar info do back
 *  POST: Cria info no back
 *  PUT: Altera info no back
 *  DELETE: Deletar info no back
*/

/**
 *  Tipos de parametros:
 *     - query params: parametros nomeados na rota apos "?" usado em filtros, paginação
 *     - route params: parametros utilizados para indentificar recursos
 *     - request body: corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * SQL: mysql, sqlite, postgreSQL
 * NoSQL: mongoDB, couchDB 
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
*/
