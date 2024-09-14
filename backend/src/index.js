// require('dotenv').config({path:'./env'}
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path:'./.env'
})
// Connect to the database
connectDB()
    .then(() => {
        // Listen for errors on the app
        app.on('error', (error) => {
            console.log('Error:', error);
            throw error;
        });

        // Start the server
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log('MongoDB connection failed!!!', err);
    });