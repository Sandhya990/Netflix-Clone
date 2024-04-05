const express = require('express')
const model = require('./model/db')
const parser = require('body-parser')

const cont = require('./controller/controller')



let app = express()


app.use(parser.json())


app.post('/netflixapidatas' , cont.create)

app.get('/netflixapidatas' , cont.getData)

app.put('/netflixapidatas/:id' , cont.updateData)

app.delete('/netflixapidatas/:id' , cont.deleteData)



module.exports = app


