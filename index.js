const express = require("express");
const mongoDB = require("./db");

const app = express();

const startServer = async () => {
    try {
      await mongoDB();
      app.get('/', (req, res) => {
        res.send("<h1>hello world!</h1>");
      });
  
      app.use(express.json()); // Fix: added parentheses
   app.use("/api",require("./Routes/CreateUser"))
      app.listen(5000, () => {
        console.log("Server is up and running on port 5000...");
      });
    } catch (err) {
      console.log("Error connecting to MongoDB:", err);
    }
  };

startServer(); // Call the async function to start the server
