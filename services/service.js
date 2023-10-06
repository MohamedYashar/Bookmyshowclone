const express = require("express");

// import the showsroute
const Showsrouter = require ("../routers/Shows.routes")
// import the BookingRoute
const BookingRouter = require ("../routers/Booking.routes")

// create Api server
const API_SERVER = express();


// injecting the shows router in API_SERVER
API_SERVER.use ( "/showsrouter", Showsrouter)
API_SERVER.use ( "/bookingrouter", BookingRouter)
console.log( "API_SERVER is on 🔥")

module.exports = API_SERVER;