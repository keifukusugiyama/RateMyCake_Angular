//use mongoose 
var mongoose = require("mongoose");
//connect mongoose 
mongoose.connect('mongodb://localhost:27017/ratemycakesdb', (err)=>{
    //if there's error, log
    if(err){
        console.log(err)
    }
});

var RatingSchema = new mongoose.Schema({
    stars: {type:Number},
    comments: {type:String}
})

//create new TaskSchema table
var CakeSchema = new mongoose.Schema({
    bakerName: {type:String, minlength:[3, "need longer name"]},
    imgURL: {type:String, required:[true, "Image link required"]},
    ratings: [RatingSchema]
    //timestamp for createdat and updatedat
}, {timestamps:true})

//export the TaskSchema to controller.js
module.exports = mongoose.model('Cake', CakeSchema);
