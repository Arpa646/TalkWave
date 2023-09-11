const express = require("express");
// const {
//   accessChat,
  
// } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroupChat } = require("../controllers/chatControllers");
const { renameGroup, removeFromGroup, addToGroup } = require("../controllers/userControllers");

const router = express.Router();
//access route only login user access route
 router.route("/").post(protect, accessChat);
// //pert
router.route("/").get(protect, fetchChats);
// //creation of group
 router.route("/group").post(protect, createGroupChat);
// //rename the group
 router.route("/rename").put(protect, renameGroup);
// //remove the group
 router.route("/groupremove").put(protect, removeFromGroup);
// //add to someone into the group
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;