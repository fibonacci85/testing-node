//import dependencies 
const express = require("express");
const helmet = require("helmet");

//import router 
const PetsRouter = require("./pets/pets_router.js");

//create server
const server = express();
server.use(helmet());
server.use(express.json());
server.use("/api/pets", PetsRouter); // create the endpoint 

module.exports = server;