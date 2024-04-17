const moongose = require('mongoose')

const food = new moongose.Schema({
    name: String,
    price: Number,
    ownerid: String,
    type: String,
    img: String,
    description: String,
    special: []

})

const Food = moongose.model('Food', food)

module.exports = Food
