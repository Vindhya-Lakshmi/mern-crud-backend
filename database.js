

const mongoose = require("mongoose");


const databaseConnection = async () => {
    mongoose
        .connect("mongodb+srv://vindhyalakshmiofficial:eLKkhIaEvqQy5HPl@cluster0.o1pm1is.mongodb.net/bookstore")
        .then(() => {
            console.log("Database connected successfully")
 
        })
        .catch((err) => {
            console.log("Database connection failed", err);
        })

};


module.exports = databaseConnection;

