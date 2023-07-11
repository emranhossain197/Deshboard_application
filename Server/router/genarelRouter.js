const express = require('express')

const Router = express.Router()

Router.get("/", (req, res)=>{
    res.json({message: "Genarel home router!"})
})



module.exports = Router;