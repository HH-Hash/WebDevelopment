// Import the necessary modules
const express = require("express");
const { MongoClient } = require("mongodb");

// Create a new Express application
const app = express();

// Define the port number to listen on
const PORT = process.env.PORT || 3000;

// Define the MongoDB connection URI and database name
const MONGODB_URI = "mongodb+srv://hshein:kanta1.@cluster0.esedjtk.mongodb.net/?retryWrites=true&w=majority";

// Connect to the MongoDB database
MongoClient.connect(MONGODB_URI, function(error, client) {
  if (error) {
    console.error(error);
    return;
  }

  console.log("Connected to the MongoDB database");

  // Get a reference to the database
  const db = client.db();

  // Set up the routes for the HTTP requests
  app.get("/", function(request, response) {
    response.send("Hello, world!");
  });

  // Start the server
  app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
  });
});
