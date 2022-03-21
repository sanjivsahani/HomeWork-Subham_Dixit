const mongoose = require("mongoose")
// mongodb url in String cloud mongoDb
// mongoURI = "mongodb+srv://saan:DiqIJ2b7NN8HiB0S@cluster0.2pnyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

// creating a function for connection of mongoDb  with server
function connectToMongo() {
    mongoose.connect(mongoURI, () => {
        console.log("mongodb is connected ")
    })
}
module.exports = connectToMongo;