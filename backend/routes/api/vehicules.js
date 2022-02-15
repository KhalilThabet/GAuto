const express = require("express");
const router = express.Router();
//Item model
const Item = require("../../models/Vehicules");
const d = new Date();
const date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});
router.post("/", (req, res) => {
  const newItem = new Item({
    Sticker: date,
    Insurance: date,
    TechnicalInspection: date,
    Drainage: date,
    Filters: date,
    Breaks: date,
    Wheel: date,
    Belt: date,
    RegisterPlate: req.body.RegisterPlate,
    Model: req.body.Model,
    NumberOfHorses: req.body.NumberOfHorses,
    Brand: req.body.Brand,
    Service: true,
  });

  newItem.save().then((item) => res.json(item));
});

router.delete("/:tempRegisterPlate", (req, res) => {
  Item.findOne({ RegisterPlate: req.params.tempRegisterPlate })
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

//button update les dates
router.put("/assurance/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { Insurance: req.body.Insurance },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/visite/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { TechnicalInspection: req.body.TechnicalInspection },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/vignette/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { Sticker: req.body.Sticker },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/vidange/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { Drainage: req.body.Drainage },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/pneues/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { Wheel: req.body.Wheel },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/freinage/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { Breaks: req.body.Breaks },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/filtre/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { Filters: req.body.Filters },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/courroies/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { Belt: req.body.Belt },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});

router.put("/service/:tempRegisterPlate", (req, res) => {
  Item.findOneAndUpdate(
    { RegisterPlate: req.params.tempRegisterPlate },
    { Service: req.body.Service },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});

module.exports = router;
