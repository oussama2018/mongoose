const express = require('express')
const router = express.Router()
const person = require('../model/personSchema')
//Create Many Records with model.create()

const arrayOfPeople = [
    {
      name: 'oussama',
      age: 25,
      favoriteFoods: ['Pizza', 'Burger']
    },
    {
      name: 'dali',
      age: 30,
      favoriteFoods: ['Sushi', 'Pasta']
    },
    {
      name: 'omar',
      age: 40,
      favoriteFoods: ['Steak', 'Ice Cream']
    }];


    // Use model.find() to Search Your Database
router.get('/',async(req,res)=>{
    try {
   const listperson =await person.find()

    res.status(200).json({msg:'get all person',listperson:listperson})
    } catch (error) {
        res.status(400).json(error)
    }
})
router.post('/post',async(req,res)=>{
  try {
  const persons= await person.create(arrayOfPeople)
 
  res.status(200).json({msg:'create record',persons:persons})
  } catch (error) {
      res.status(400).json(error)
  }
})

//Use model.findOne() to Return a Single Matching Document from Your Database

router.get('/getone',async(req,res)=>{
  try {
 const Oneperson =await person.findOne({favoriteFoods:"Sushi"})

  res.status(200).json({msg:'get One person',Oneperson:Oneperson})
  } catch (error) {
      res.status(400).json(error)
  }
})

//Use model.findOne() to Return a Single Matching Document from Your Database

router.get('/getid',async(req,res)=>{
  try {
 const Oneperson =await person.findById({_id:"64b6df0f8ad6525f4f13c2d7"})

  res.status(200).json({msg:'get One person',Oneperson:Oneperson})
  } catch (error) {
      res.status(400).json(error)
  }
})

//Perform Classic Updates by Running Find, Edit, then Save

router.put('/getupdate/:id',async(req,res)=>{
  try {
    const a=await person.findById({_id:req.params.id})

    const w=a.favoriteFoods.push('hamburger')
 const updateperson =await person.findByIdAndUpdate({_id:req.params.id},{favoriteFoods:a.favoriteFoods})
 await updateperson.save()



  res.status(200).json({msg:'updated One person',updateperson:updateperson})
  } catch (error) {
      res.status(400).json(error)
  }
})

//Perform New Updates on a Document Using model.findOneAndUpdate()


router.put('/findname/:name',async(req,res)=>{
  try {
   
 const updateage =await person.findOneAndUpdate({name:req.params.name},{name:"20"})

  res.status(200).json({msg:'updated age person',updateage:updateage})
  } catch (error) {
      res.status(400).json(error)
  }
})

//Delete One Document Using model.findByIdAndRemove


router.delete('/delete/:id',async(req,res)=>{
  try {

 const updateage =await person.findByIdAndDelete({_id:req.params.id})

  res.status(200).json({msg:'updated age person',updateage:updateage})
  } catch (error) {
      res.status(400).json(error)
  }
})

//MongoDB and Mongoose - Delete Many Documents with model.remove()


router.delete('/delete',async(req,res)=>{
  try {

 const updateage =await person.deleteMany({name:"omar"})

  res.status(200).json({msg:'updated age person',updateage:updateage})
  } catch (error) {
      res.status(400).json(error)
  }
})

//Chain Search Query Helpers to Narrow Search Results


router.get('/findbu',async(req,res)=>{
  try {

 const updateage =await person.find({favoriteFoods:"Sushi"}).sort({name:"asc"}).limit(1).select({name:false}).then((console.log("done")))

  res.status(200).json({msg:'updated age person',updateage:updateage})
  } catch (error) {
      res.status(400).json(error)
  }
})
module.exports = router