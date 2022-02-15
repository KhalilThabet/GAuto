const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Auth");
// @route GET api/item
// @desc GET ALL Items

router.get("/", (req, res) => {
  //const data={CIN:req.body.CIN,password:req.body.password};

  Item.find()
    .sort({ date: -1 })
    .then((items) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
      );
      res.send(JSON.stringify(items));
    });
});
router.get("/auth/:un/:pw", (req, res) => {
  Item.findOne({ CIN: req.params.un, Password: req.params.pw })
    .sort({ date: -1 })
    .then((items) => {
      if (items == null) {
        res.send({ response: false });
      } else {
        res.send({ response: true });
      }
      res.send(JSON.stringify(items));
      console.log(JSON.stringify(items));
    });
});
// @route POST api/item
// @desc Create a post
router.get("/auth", (req, res) => {
  Item.find().then((items) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.send(JSON.stringify(items));
  });
});
//nouveau utilisateur
router.post("/", (req, res) => {
  const newItem = new Item({
    CIN: req.body.CIN,
    Password: req.body.Password,
    Position: req.body.Position,
  });

  newItem.save().then((item) => res.json(item));
});

// @route DELETE api/item
// @desc delete an Item

router.delete("/:js", (req, res) => {
  Item.findOne({ CIN: req.params.js })
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

router.put("/dir", (req, res) => {
  Item.findOneAndUpdate(
    { Position: "admin" },
    { CIN: req.body.CIN, Password: req.body.Password },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/emp", (req, res) => {
  Item.findOneAndUpdate(
    { Position: "emp" },
    { CIN: req.body.CIN, Password: req.body.Password },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});

router.get("/accdir", (req, res) => {
  Item.findOne({ Position: "admin" })
    .sort({ date: -1 })
    .then((items) => res.json(items));
});
router.get("/accemp", (req, res) => {
  Item.findOne({ Position: "emp" })
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

module.exports = router;
