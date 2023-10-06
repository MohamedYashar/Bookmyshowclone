const express = require("express")
const API_SERVER = require("./services/service");
const BODY_PARSER = require("body-parser")
const configDotenv = require("dotenv");

//  load .env variables into process.env
configDotenv.config()
console.log(process.env)

// import the db.config to connect db in server
const {init} = require('./db.config');

init();

// create HTTP server
const HTTP_SERVER = express();

// commanding the server  to aware of incoming req type
// parser the request as application / json
HTTP_SERVER.use(BODY_PARSER.json());

// parser therequest as application/x-www-form-urlencoded
HTTP_SERVER.use(BODY_PARSER.urlencoded({extended: true}));

// open the port to all incoming connection
const PORT = 5000;

// Listen to a port
HTTP_SERVER.listen(PORT, process.env.Host, () => {

    console.log( "HTTP_SERVER IS LISTENING TO PORT-5000")
})



// creating a HTTP ROUTE
HTTP_SERVER.get ("/", (req, res, next)=>{

    console.log( " Http server route is enabled")
    return res.status(200).json( {
        miriginajumbo : 'Welcome to Bookmyshow Management System'
    })

})

//Injecting Api server
HTTP_SERVER.use("/apiserver", API_SERVER)

