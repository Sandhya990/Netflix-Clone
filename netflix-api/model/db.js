// model is used for writing db schema/db data


// const {default:mongoose}=require('mongoose')

const db = require('mongoose')

const data = db.Schema({
    userEmail: String,
    details:{
        name: String,
        imageUrl: String,
    }

    // name : {
    //     type : String,
    // },
    // imageUrl : String,
    
})

const dbdata = new db.model('netflixapidatas', data)

module.exports = dbdata

