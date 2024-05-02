const express = require('express')
const Sequelize = require('sequelize')
const { Json } = require('sequelize/lib/utils')
const app = express()

//definimos los parametros de conexion
const sequelize = new Sequelize('data','root','', {
    host:'localhost',
    port: '3308',
    dialect:'mysql'
})

//definimos el modelo
const clientesModel = sequelize.define('clientes', {
    "id":{type:Sequelize.INTEGER, primaryKey:true},
    "nomcli":Sequelize.STRING,
    "apecli":Sequelize.STRING,
    "nrodnicli":Sequelize.STRING,
    "telcli":Sequelize.STRING
})

//autentificamos
sequelize.authenticate()
.then(() => {
    console.log('conexion a la base de datos OK')
})

.catch(error => {
    console.log('error de conexion a la base de datos ' + error)
})

//Mostramos todos los registros
clientesModel.findAll({attributes: ['id','nomcli','apecli','nrodnicli','telcli']})
.then(clientes => {
    const resultados = JSON.stringify(clientes)
    console.log(resultados)
})
.catch(error => {
    console.log('No hay registros ' + error)
})

app.listen(3000, () => {
    console.log('conectado')
})