const express= require('express');
const router = express.Router();
const d=new Date();
const date=(d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear());
const hour=d.getHours()+':'+d.getMinutes();
const mongoose=require("mongoose");


//Item model
const Item= require('../../models/Candidats');
  
// @route GET api/item
// @desc GET ALL Items

router.get('/',(req,res)=>{
    Item.find()
        .sort({date : -1})
        .then(items => res.json(items))
});
router.get('/:id',(req,res)=>{
  Item.findOne({cin:req.params.id})
      .sort({date : -1})
      .then(items => res.json(items))
});


// @route POST api/item
// @desc Create a post

router.post('/',(req,res)=>{
    const newItem= new Item({
        cin : req.body.cin,
        mdp:req.body.mdp,
        nom : req.body.nom,
        prenom:req.body.prenom,
        adresse : req.body.adresse,
        mail:req.body.mail,
        num:req.body.num,
        nbCode:0,
        nbConduite:0,
        nbExamCode:0,
        nbExamConduite:0,
        MontantPayer:0,
        MontantResteAPayer:0,
        dateSession:date,
        heureSession:hour,
        typeSession:'code',
        dateExam:date,
        heureExam:hour,
        typeExam:'code' ,

    });

    newItem.save().then(item=>res.json(item));
    res.redirect("http://localhost:3000/gcondidat");
    
});
router.delete('/:js',(req,res)=>{
  Item.findOne({cin:req.params.js})
   .then(item => item.remove().then(()=> res.json({success:true})))
   .catch(err => res.status(404).json({success:false}));
  
});


router.put('/:cin',(req,res)=>{
  Item.findOneAndUpdate({"cin":req.params.cin}, 
  {"cin": req.body.cin,
  "mdp": req.body.mdp,
  "nom": req.body.nom,
  "prenom": req.body.prenom,
  "adresse": req.body.adresse,
  "mail": req.body.mail,
  "num": req.body.num }, { returnNewDocument: true })
  .then(res => res.status(200).json({success:true}))
  .catch(err => res.status(404).json({success:false}))
})

//modifier la date de seance prochaine
router.put('/session/:ff',(req,res)=>{
  Item.findOneAndUpdate({cin:req.params.ff}, 
  {"dateSession":req.body.dateSession,
  "heureSession":req.body.heureSession,
  "typeSession":req.body.typeSession }, { returnNewDocument: true })      
  .then(items => res.json(items)) 
})
//modifier la date de examen prochaine
router.put('/examens/:vc',(req,res)=>{
  Item.findOneAndUpdate({cin:req.params.vc}, 
  { "dateExam":req.body.dateExam,
    "heureExam":req.body.heureExam,
    "typeExam":req.body.typeExam  }, { returnNewDocument: true })      
  .then(items => res.json(items)) 
})



// les buttons de bloc paiment
router.put('/nbSessioncode/:nbs',(req,res)=>{
  Item.findOneAndUpdate({"cin":req.params.nbs}, 
  {nbCode:req.body.nbCode,MontantResteAPayer:req.body.MontantResteAPayer}, { returnNewDocument: true })
  .then(items => res.json(items))
})
router.put('/nbSessionconduit/:ns',(req,res)=>{
  Item.findOneAndUpdate({"cin":req.params.ns}, 
  {nbConduite:req.body.nbConduite,MontantResteAPayer:req.body.MontantResteAPayer}, { returnNewDocument: true })
  .then(items => res.json(items))
})
router.put('/nbExamcode/:rr',(req,res)=>{
  Item.findOneAndUpdate({"cin":req.params.rr}, 
  {nbExamCode:req.body.nbExamCode,MontantResteAPayer:req.body.MontantResteAPayer}, { returnNewDocument: true })
  .then(items => res.json(items))
})
router.put('/nbExamconduite/:er',(req,res)=>{
  Item.findOneAndUpdate({"cin":req.params.er}, 
  {nbExamConduite:req.body.nbExamConduite,MontantResteAPayer:req.body.MontantResteAPayer}, { returnNewDocument: true })
  .then(items => res.json(items))
})
router.put('/montantpayee/:er',(req,res)=>{
  Item.findOneAndUpdate({"cin":req.params.er}, 
  {MontantPayer:req.body.MontantPayer,MontantResteAPayer:req.body.MontantResteAPayer}, { returnNewDocument: true })
  .then(items => res.json(items))
})


module.exports = router;