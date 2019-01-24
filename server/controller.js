//use models CakeSchema
const Cake = require("./models");

//export to routes.js
module.exports = {
    //get /Cakes 
    all: (req, res) => {
        //retrieve all the Cakes
        Cake.find({})
            //if successful, respond with json file of result
            .then(results => res.json(results))
            //if there's error, respond with json file of error
            .catch(err => res.json(err))
    },

    //get /Cakes/id 
    perId: (req, res) =>{
        //find Cake with id provided on the route
        Cake.findById(req.params.id)
        //if successful, respond with json file of result
        .then(result => res.json( result))
        //if there's error, respond with json file of error
        .catch(err=>res.json(err)) 
    },

    //post /Cakes 
    new:(req, res)=>{
        //create new Cake with returned json file on body
        Cake.create(req.body)
        //if successful, respond with json file with newly created Cake
        .then(newCake => res.json({data: newCake}))
        //if there's error, respond with json file of error
        .catch(err=>res.json(err)) 
    },

    rateCake:(req,res)=>{
        Cake.findByIdAndUpdate(req.params.id, {
            $push:{ratings: req.body}
        })
        .then(result => res.json( result))
        //if there's error, respond with json file of error
        .catch(err=>res.json(err)) 
    }
}