const express = require("express");
const itemController = require("../controllers/itemController");
const router = express.Router();

// view all items
router.get("/", itemController.item_index);

// add item
router.post("/", itemController.item_create_post);

// view create item form
router.get("/create", itemController.item_create_get);

// view single item
router.get("/:id", itemController.item_details);

// delete item
router.delete("/:id", itemController.item_delete);

module.exports = router;
