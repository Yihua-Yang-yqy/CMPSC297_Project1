// using the code from tutorial: Initial Setup for an Express.JS Project (except the noted sections)
//
// ./index.js
// * Imports
const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition

// ----------------------------------
// For the below section, Using code from tutorial: Creating Blockchain Data Structures
//
// Imports from our class modules

const Blockchain = require("./src/blockchain");

// ----------------------------------
// Code in this section is from: Creating Blockchain Data Structures
//
// Global variables

global.difficulty = 5; // Difficulty to mine a particular block

global.blockchain = new Blockchain(); // Our copy of the blockchain

global.transactions = []; // Our current transactions
// ----------------------------------

// Initialize express's class object
const app = express();
// Tell Express to use Morgan for logging requests to the console
app.use(morgan("dev")); // Pretty-print requests with the "dev" format

// Create the port number for the server to listen on
const port = 8080; // See: Wikipedia's List of TCP and UDP port numbers

// Dynamically load all routes from the ./routes folder

require("./routes")(app);

// start to listen GET
// Configure our server to run
app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});


