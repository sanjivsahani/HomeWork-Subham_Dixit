

// importng mondule
const express = require("express")
// const router = require('./routes/crudroutes')
const connectToMongo = require("./config/db")

// app config
const app = express();

// connecting  to monogo db
connectToMongo()

// express middile Were
app.use(express.json())
//PORT
const PORT = 8000
// routes
app.use('/api/v1',require('./routes/crudroutes'))

// lsitner
app.listen(PORT, () => {
    console.log(`app is listing at  the a port ${PORT}`)
})

