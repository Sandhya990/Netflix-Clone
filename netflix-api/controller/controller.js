// controller is used as a mediator and view related data is  stored. business logic is used in the controller


const model = require('../model/db')

exports.create  = (req,res)=>{

    // const{email , name , imageUrl} = req.body

    // let createdata = new model({email , name,imageUrl})

    // createdata.save()
    // .then(data=>{
    //     res.json(data)
    // })

    const{userEmail,name,imageUrl} = req.body
    let createdata =new model({userEmail,details:{name,imageUrl}})

    createdata.save()
    .then(data=>{
        res.json(data) 
    })
}



exports.getData = (req,res)=>{

    


    const userEmail = req.query.userEmail;
        model.find({userEmail})
        .then(data=>{
            res.json(data)
            console.log(data)
        })
}

//req.body => refers to it stores the request data into body 
//The req object contains the request, that is, the thing the client sends to your server


exports.updateData = (req,res)=>{

    const{userEmail,details:{name,imageUrl}} = req.body 
        const getid = req.params.id
        model.findByIdAndUpdate(getid,{userEmail,details:{name,imageUrl}})
        .then(data=>{
            res.json(data)
            console.log(data)
        })
}




exports.deleteData = (req,res)=>{

    const getid = req.params.id
        // console.log(getid)
        model.findByIdAndDelete(getid)
        .then(data=>{
            res.json(data)
            console.log(data)
        })

}

