const express = require("express");
const router = express.Router();
//Item model
const Item = require("../../models/Employes");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    LastName: req.body.LastName,
    FirstName: req.body.FirstName,
    CIN: req.body.CIN,
    Salary: req.body.Salary,
    Position: req.body.Position,
    Service: req.body.Service,
    PhoneNumber: req.body.PhoneNumber,
  });

  newItem.save().then((item) => res.json(item));
});
router.delete("/:demp", (req, res) => {
  Item.findOne({ CIN: req.params.demp })
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});
//modifier les infos de employees
router.put("/nom/:nemp", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.nemp },
    { LastName: req.body.LastName },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/prenom/:pemp", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.pemp },
    { FirstName: req.body.FirstName },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/poste/:rremp", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.rremp },
    { Position: req.body.Position },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/salaire/:erpem", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.erpem },
    { Salary: req.body.Salary },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/telephone/:eremp", (req, res) => {
  Item.findOneAndUpdate(
    { cin: req.params.eremp },
    { PhoneNumber: req.body.PhoneNumber },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/service/:ep", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.ep },
    { Service: req.body.Service },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/cin/:mp", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.mp },
    { CIN: req.body.CIN },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});

module.exports = router;
