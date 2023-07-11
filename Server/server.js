const dotenv = require("dotenv")
const express = require('express')
const connectDB = require("./db/connection")
const middleware = require("./middleware/middleware")

const app = express();
const PORT = process.env.PORT ?? 4444;
dotenv.config()


// middleware configation 
app.use(middleware)


// connection database 
connectDB()

// this project all router setup 
app.use("/genarel", require('./router/genarelRouter.js'))
app.use("/client", require("./router/clientRouter"))
app.use("/management", require("./router/managementRouter"))
app.use("/sale", require("./router/salesRouter"))



app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})



