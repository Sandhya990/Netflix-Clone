
const express = require('express')
const model  =require('./model/db')

const db = require('mongoose')
const router = require('./routes')

const cors = require('cors')

let app = express()

db.connect('mongodb://localhost:27017/netflix')


app.use(cors())


app.use(router)


app.listen(6012)















