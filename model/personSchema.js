const mongoose = require('mongoose')


const personSchema = mongoose.Schema({
    name: String,
    Age:Number,
    favoriteFoods:[String]
})

const person = mongoose.model('person',personSchema)

module.exports=person