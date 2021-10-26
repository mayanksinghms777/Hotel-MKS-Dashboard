const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")

require('../db/conn')
const Login = require('../models/userSchema')
const Prices = require('../models/PricesSchema')
const Newbooking = require('../models/newbookingSchema')
const Room = require('../models/roomSchema')
const Staff = require('../models/staffSchema')
const Vehicle = require('../models/vehicleSchema')



router.post('/login', async(req, res) => {

    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(402).json({error :"please fill the field "})
        }
        
        const userLogin = await Login.findOne({email:email})

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)
            if(password != userLogin.password){
                res.status(402).json({error :"invalid match"})
                console.log("pass match not")
            }else{
                res.status(201).json({message :"Sucessfully login "})
            }
        }else{
            res.status(402).json({error :"invalid login"})
        }


    }catch(err){
        console.log(err)
    }

})

router.get('/prices', async(req, res) => {

    try{
        const Pricesdata = await Prices.find()
        res.send(Pricesdata[0])
        console.log(Pricesdata[0].single_AC)
     
       }catch(e){
         res.status(404).send(e);
       }

})

router.post('/checkin', async(req, res) => {
   
    const {firstname,lastname,phone,email,address,city,state,zip,type,roomtype,roomnumber,num_guest,arrivaldate,arrivaltime,paymentmode,totalpayment} = req.body

    if(!firstname || !lastname || !phone || !email || !address || !city || !state || !zip ||!type || !roomtype || !roomnumber || !num_guest || !arrivaldate || !arrivaltime || !paymentmode || !totalpayment){
        console.log("please fill the field ")
        return res.status(402).json({error :"please fill the field "})
    }

    try{

        const newbooking = new Newbooking({firstname,lastname,phone,email,address,city,state,zip,type,roomtype,roomnumber,num_guest,arrivaldate,arrivaltime,paymentmode,totalpayment})
        const newcheckin = await newbooking.save()
        res.status(201).json({message :"booked "})

    }catch(e){
        res.status(421).json({message :"no booking "})
        console.log(e)
    }
})

router.get('/bookings', async(req, res) => {
 
    const newbookingdata = await Newbooking.find()
   res.send(newbookingdata)

  })

  router.patch('/BookingForm/:id', async(req, res) => {
    
    try{

        const _id = req.params.id
        const newbookingdata = await Newbooking.findByIdAndUpdate(_id, req.body)
        res.status(201).send(newbookingdata)
        console.log(newbookingdata)
     
       }catch(e){
         res.status(404).send(e);
       } 

  }) 
  
  router.patch('/invoice/:id', async(req, res) => {

    const _id = req.params.id

    const newbookingdata = await Newbooking.findByIdAndUpdate(_id, req.body)
    res.status(201).send(newbookingdata)
    console.log(newbookingdata)

  })

  router.post('/addroom', async(req, res) => {
   
    const {room_no,type,roomtype,meal,amount} = req.body

    if(!room_no || !type || !roomtype || !meal || !amount ){
        console.log("please fill the field ")
        return res.status(402).json({error :"please fill the field "})
    }

    try{

        const newroom = new Room({room_no,type,roomtype,meal,amount})
        const newroomadd = await newroom.save()
        res.status(201).json({message :"room added "})

    }catch(e){
        res.status(421).json({message :"no room added "})
        console.log(e)
    }
    })

    router.get('/addroomdata', async(req, res) => {
 
        const roomdata = await Room.find()
       res.send(roomdata)
    
      })

    router.patch('/addroom/:id', async(req, res) => {
    
        try{
    
            const _id = req.params.id
            const roomdata = await Room.findByIdAndUpdate(_id, req.body)
            res.status(201).send(roomdata)
            console.log(roomdata)
         
           }catch(e){
             res.status(404).send(e);
           } 
    
      })
      
    router.delete('/services/:id', async(req,res) =>{

        try{
      
         const _id = req.params.id
         const deleteroom = await Room.findByIdAndDelete(_id)
         console.log("deleted")
         res.status(201).json("deleted")
         
        }catch(e){
          res.status(404).send(e);
        }
    })

    router.post('/addstaff', async(req, res) => {
   
        const {firstname,designation,phone_no,email,joining_date,gender} = req.body
    
        if(!firstname || !designation || !phone_no || !email || !joining_date || !gender ){
            console.log("please fill the field ")
            return res.status(402).json({error :"please fill the field "})
        }
    
        try{
    
            const newstaff = new Staff({firstname,designation,phone_no,email,joining_date,gender})
            const newstaffadd = await newstaff.save()
            res.status(201).json({message :"Staff added "})
    
        }catch(e){
            res.status(421).json({message :"no Staff added "})
            console.log(e)
        }
    })

    router.get('/addstaffdata', async(req, res) => {
 
        const staffdata = await Staff.find()
        res.send(staffdata)
    
      })

      router.patch('/addstaff/:id', async(req, res) => {
    
        try{
    
            const _id = req.params.id
            const staffdata = await Staff.findByIdAndUpdate(_id, req.body)
            res.status(201).send(staffdata)
            console.log(staffdata)
         
           }catch(e){
             res.status(404).send(e);
           } 
    
      })

      router.delete('/servicesstaff/:id', async(req,res) =>{

        try{
      
         const _id = req.params.id
         const deletestaff = await Staff.findByIdAndDelete(_id)
         console.log("deleted")
         res.status(201).json("deleted")
         
        }catch(e){
          res.status(404).send(e);
        }
    })


    router.post('/addvehicle', async(req, res) => {
   
        const {vehicle,vehicle_no,seating_capicity,type,driver_name,buying_date} = req.body
    
        if(!vehicle || !vehicle_no || !seating_capicity || !type || !driver_name || !buying_date ){
            console.log("please fill the field ")
            return res.status(402).json({error :"please fill the field "})
        }
    
        try{
    
            const newvehicle = new Vehicle({vehicle,vehicle_no,seating_capicity,type,driver_name,buying_date})
            const newvehicleadd = await newvehicle.save()
            res.status(201).json({message :"Vehicle added "})
    
        }catch(e){
            res.status(421).json({message :"no Vehicle add "})
            console.log(e)
        }
    })

    router.get('/addvehicledata', async(req, res) => {
 
        const vehicledata = await Vehicle.find()
        res.send(vehicledata)
    
      })

      router.patch('/addvehicle/:id', async(req, res) => {
    
        try{
    
            const _id = req.params.id
            const vehicledata = await Vehicle.findByIdAndUpdate(_id, req.body)
            res.status(201).send(vehicledata)
            console.log(vehicledata)
         
           }catch(e){
             res.status(404).send(e);
           } 
    
      })

      router.delete('/servicessvehicle/:id', async(req,res) =>{

        try{
      
         const _id = req.params.id
         const deletevehicle = await Vehicle.findByIdAndDelete(_id)
         console.log("deleted")
         res.status(201).json("deleted")
         
        }catch(e){
          res.status(404).send(e);
        }
    })

    router.get('/CustomerDetail/:id', async(req, res) => {
    
        try{
    
            const _id = req.params.id
            const newbookingdata = await Newbooking.findById(_id, req.body)
            res.status(201).send(newbookingdata)
            console.log(newbookingdata)
         
           }catch(e){
             res.status(404).send(e);
           } 
    
      }) 

    router.get('/StaffDetail/:id', async(req, res) => {
    
        try{
    
            const _id = req.params.id
            const newstaffdata = await Staff.findById(_id, req.body)
            res.status(201).send(newstaffdata)
            console.log(newstaffdata)
         
           }catch(e){
             res.status(404).send(e);
           } 
    
      }) 

      router.get('/addlogindata', async(req, res) => {
 
        const logindata = await Login.find()
        res.send(logindata)
    
      })

    router.get('/ReceptionistDetail/:id', async(req, res) => {
    
        try{
    
            const _id = req.params.id
            const newlogindata = await Login.findById(_id, req.body)
            res.status(201).send(newlogindata)
            console.log(newlogindata)
         
           }catch(e){
             res.status(404).send(e);
           } 
    
      }) 

module.exports=router;