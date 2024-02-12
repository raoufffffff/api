const moongose = require('mongoose')

const livror = new moongose.Schema({
    name: String,
    lastname: String,
    tel: String,
    email: String,
    orders: Number,
    cancelOrders: Number,
    online: Boolean,
    whorate: [],
    stars: {
        index: Number,
        total: Number
    },
    password: String,
    timing: [],
    age: Number,
    check: Boolean,
    haveorder: {},
    prmetion: Boolean
})

const Livror = moongose.model("livror", livror)

module.exports = Livror