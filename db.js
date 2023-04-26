
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/gofood";

const mongoDB = async () => {
    return new Promise((resolve, reject) => { // Fix: returning a Promise
      mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB");
        resolve(); // Resolve the Promise when connected
      });
      mongoose.connection.on('error', (err) => {
        console.log("Error connecting to MongoDB:", err);
        reject(err); // Reject the Promise if there's an error
      });
    });
  };
module.exports = mongoDB;




// module.exports = mongoDB; // Export the mongoDB function
