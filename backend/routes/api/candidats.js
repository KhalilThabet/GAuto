const express = require("express");
const router = express.Router();
const d = new Date();
const date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
const Time = d.getHours() + ":" + d.getMinutes();
const mongoose = require("mongoose");

//Item model
const Item = require("../../models/Candidats");

// @route GET api/item
// @desc GET ALL Items

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});
router.get("/:id", (req, res) => {
  Item.findOne({ CIN: req.params.id })
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/item
// @desc Create a post

router.post("/", (req, res) => {
  const newItem = new Item({
    CIN: req.body.CIN,
    Password: req.body.Password,
    LastName: req.body.LastName,
    FirstName: req.body.FirstName,
    Adress: req.body.Adress,
    AdressMail: req.body.AdressMail,
    PhoneNumber: req.body.PhoneNumber,
    NumberOfCodeSessions: 0,
    NumberOfDrivingSessions: 0,
    NumberOfCodeExams: 0,
    NumberOfDrivingExams: 0,
    AmountPaid: 0,
    RemainingPayment: 0,
    DateSession: date,
    TimeSession: Time,
    TypeSession: "code",
    DateExam: date,
    TimeExam: Time,
    TypeExam: "code",
  });

  newItem.save().then((item) => res.json(item));
  res.redirect("http://localhost:3000/gcondidat");
});
router.delete("/:js", (req, res) => {
  Item.findOne({ CIN: req.params.js })
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

router.put("/:cin", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.CIN },
    {
      CIN: req.body.CIN,
      Password: req.body.Password,
      LastName: req.body.LastName,
      FirstName: req.body.FirstName,
      Adress: req.body.Adress,
      AdressMail: req.body.AdressMail,
      PhoneNumber: req.body.PhoneNumber,
    },
    { returnNewDocument: true }
  )
    .then((res) => res.status(200).json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

//modifier la date de seance prochaine
router.put("/session/:ff", (req, res) => {
  Item.findOneAndUpdate(
    { cin: req.params.ff },
    {
      DateSession: req.body.DateSession,
      TimeSession: req.body.TimeSession,
      TypeSession: req.body.TypeSession,
    },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
//modifier la date de examen prochaine
router.put("/examens/:vc", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.vc },
    {
      DateExam: req.body.DateExam,
      TimeExam: req.body.TimeExam,
      TypeExam: req.body.TypeExam,
    },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});

// les buttons de bloc paiment
router.put("/nbSessioncode/:nbs", (req, res) => {
  Item.findOneAndUpdate(
    { CIN: req.params.nbs },
    {
      NumberOfCodeSessions: req.body.NumberOfCodeSessions,
      RemainingPayment: req.body.RemainingPayment,
    },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/nbSessionconduit/:ns", (req, res) => {
  Item.findOneAndUpdate(
    { cin: req.params.ns },
    {
      NumberOfDrivingSessions: req.body.NumberOfDrivingSessions,
      RemainingPayment: req.body.RemainingPayment,
    },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/nbExamcode/:rr", (req, res) => {
  Item.findOneAndUpdate(
    { cin: req.params.rr },
    {
      NumberOfCodeExams: req.body.NumberOfCodeExams,
      RemainingPayment: req.body.RemainingPayment,
    },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/nbExamconduite/:er", (req, res) => {
  Item.findOneAndUpdate(
    { cin: req.params.er },
    {
      NumberOfDrivingExams: req.body.NumberOfDrivingExams,
      RemainingPayment: req.body.RemainingPayment,
    },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});
router.put("/montantpayee/:er", (req, res) => {
  Item.findOneAndUpdate(
    { cin: req.params.er },
    {
      AmountPaid: req.body.AmountPaid,
      RemainingPayment: req.body.RemainingPayment,
    },
    { returnNewDocument: true }
  ).then((items) => res.json(items));
});

module.exports = router;
