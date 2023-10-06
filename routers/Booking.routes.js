// get all the bookings
// get specific booking matching the {id}
// create a booking
// update the booking {id}
// delete the booking {id}

const express = require ( "express")

// Create showrouter
const BookingRouter = express.Router();

//  use the get  method
BookingRouter.get ("/", (req, res,next) =>{
    res.status(200).json({
        message: " Sadham is watching BookingRouter syntax 🔥🔥 "
   })
})

//  use the post  method
BookingRouter.post ("/:id", (req, res,next) =>{
   res.status(200).json({
      message : "Sadham BHAI!! 👋🏻👋🏻 ==> /:id post Api Router is working <=="
  })
})
//  use the put  method
BookingRouter.put ("/update/:id", (req, res,next) =>{
    res.status(200).json({
       message : "Sadham BHAI!! 👋🏻👋🏻 ==> /:id put Api Router is working <=="
   })
 })
 
 //  use the delete  method
BookingRouter.delete ("/delete/:id", (req, res,next) =>{
    res.status(200).json({
       message : "Sadham BHAI!! 👋🏻👋🏻 ==> /:id delete Api Router is working <=="
   })
 })
 


//  exporting show router
module.exports = BookingRouter;