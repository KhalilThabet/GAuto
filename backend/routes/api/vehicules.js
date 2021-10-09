const express= require('express');
const router = express.Router();
//Item model
const Item= require('../../models/Vehicules');
const d=new Date();
const date=(d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear());



 
router.get('/',(req,res)=>{
    Item.find()
        .sort({date : -1})
        .then(items => res.json(items))
});
router.post('/',(req,res)=>{
    const newItem= new Item({
        "vignette" : date,
        "assurance" : date,
        "visiteTechnique" :date,
        "vidange" : date,
        "filtre" : date,
        "freinage" : date,
        "pneues" : date,
        "courroies" :date,
        "immatricule" :req.body.immatricule,
        "modele":req.body.modele,
        "nbCheveau" :req.body.nbCheveau,
        "marque":req.body.marque,
        "service" :true
    });

    newItem.save().then(item=>res.json(item));
    
});


router.delete('/:imm',(req,res)=>{
    Item.findOne({immatricule:req.params.imm})
     .then(item => item.remove().then(()=> res.json({success:true})))
     .catch(err => res.status(404).json({success:false}));
    
  });

  //button update les dates
  router.put('/assurance/:ze',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.ze}, 
    {assurance:req.body.assurance}, { returnNewDocument: true }) 
    .then(items => res.json(items))
  })
  router.put('/visite/:vze',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.vze}, 
    {visiteTechnique:req.body.visiteTechnique}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/vignette/:qze',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.qze}, 
    {vignette:req.body.vignette}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/vidange/:aze',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.aze}, 
    {vidange:req.body.vidange}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/pneues/:eze',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.eze}, 
    {pneues:req.body.pneues}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/freinage/:zeq',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.zeq}, 
    {freinage:req.body.freinage}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/filtre/:zez',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.zez}, 
    {filtre:req.body.filtre}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/courroies/:er',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.er}, 
    {courroies:req.body.courroies}, { returnNewDocument: true })
    .then(items => res.json(items))
  })

  router.put('/service/:bb',(req,res)=>{
    Item.findOneAndUpdate({"immatricule":req.params.bb}, 
    {service:req.body.service}, { returnNewDocument: true })
    .then(items => res.json(items))
  })


module.exports = router;