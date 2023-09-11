const express = require("express");
//use this router to create different route
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {
    registerUser,authUser, allUsers
  
  } = require("../controllers/userControllers");

 router.route("/").post(registerUser).get(protect,allUsers)
 router.post("/login",authUser)
module.exports = router;