var express = require('express');
var router = express.Router();
const Enquiry = require('../models/Inquiry');

router.get("/", async (req, res) => {
  const inquiries = await Enquiry.find({});
  res.json({ success: true, inquiries});
})
router.post("/create", async (req, res) => {

});
router.post("/update", async (req, res) => {

});
router.post("/delete", async (req, res) => {

});

module.exports = router;

