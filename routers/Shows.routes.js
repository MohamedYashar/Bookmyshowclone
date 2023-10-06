// get all the shows
// get specific show matching the {id}
// create a show
// update the show {id}
// delete the show {id}

const express = require ( "express")

//  import the business logic from showcontroller / function and injectin the get route
const { getallShows, getAShow, createAShow} = require ( "../controller/shows.controller")

// Create showrouter
const Showrouter = express.Router();

//  use the get  method
Showrouter.get ("/",getallShows)

//  use the get single id in this method
Showrouter.get ("/:showId", getAShow )

//  This route will create a new show and use the post method
Showrouter.post ("/create", createAShow )


//  exporting show router
module.exports = Showrouter;