const express=require('express')
const app = express()
const mongoose =require('mongoose')
const port = 5000
mongoose.connect('mongodb+srv://oussama:oussama@cluster0.gqbgbeh.mongodb.net/collection?retryWrites=true&w=majority').then(console.log('Connected correctly'))
app.use('/',require('./routes/personroute'))
app.listen(port,(err)=>{err ? console.log(err) : console.log('Server is running in the port:', 5000)}) 
