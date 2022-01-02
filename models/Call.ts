const mongoose = require("mongoose")

const CallSchema = new mongoose.Schema({
    telephoneNumber: {type: String, required: true},
    date: {type: String, required: true},
    hour: {type: String, required: true},
    callDuration: {type: String, required: true},
    status: {type: String, required: true},
    step: {type: String, required: true},
    userId: {type: String, required: true}
    
})

const Call = mongoose.model("call", CallSchema)

export default Call