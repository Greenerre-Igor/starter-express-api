var express = require('express');
var router = express.Router();
const Blog = require('../models/Blog');

router.get("/", async (req, res) => {
  const blogs = await Blog.find({});
  res.json({ success: true, blogs});
})
router.post("/create", async (req, res) => {

});
router.post("/update", async (req, res) => {

});
router.post("/delete", async (req, res) => {

});

module.exports = router;

