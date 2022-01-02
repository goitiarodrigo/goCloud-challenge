const userControllers = require("../controllers/user.controllers")

const express = require("express")
const router = express.Router()


router.route("/login").post(userControllers.signIn)
router.route("/signup").post(userControllers.signUp)

router.route("/newcall").post(userControllers.newCall)
router.route("/call/:id").get(userControllers.getCallByUser)

module.exports = router