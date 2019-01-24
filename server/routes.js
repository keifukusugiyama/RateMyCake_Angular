const controller = require("./controller");

module.exports = function(app){
    app
    .get('/api/cakes', controller.all)
    //show id
    .get('/api/cakes/:id', controller.perId)
    //create new
    .post('/api/cakes', controller.new)

    .patch('/api/cakes/:id', controller.rateCake)
}