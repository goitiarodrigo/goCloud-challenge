import express from "express"
const cors = require("cors")
require("dotenv").config()
const router = require("./routes/index")
require("./config/database")
const app = express()
const morgan = require("morgan")

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use("/api", router)


app.listen(4000, ()=> console.log("Sever is running"))

