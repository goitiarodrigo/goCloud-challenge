import express from "express"
import path from "path"
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


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
  }
  
app.listen(process.env.PORT || '0.0.0.0', () => console.log(`Server running on port ${process.env.PORT}`))
  

