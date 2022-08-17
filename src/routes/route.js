const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBook", BookController.createBook)
router.post("/bookList", BookController.bookList)
router.post("/getBooksInYear", BookController.getBooksInYear  )
router.post("/getParticularBooks", BookController.getParticularBooks)
router.post("/getXINRBooks", BookController.getXINRBooks)
router.post("/getRandomBooks", BookController.getRandomBooks)

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


module.exports = router;