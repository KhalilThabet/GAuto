const express= require('express');
const router = express.Router();
//Item model
const Item= require('../../models/Employes');

router.get('/',(req,res)=>{
    Item.find()
        .sort({date : -1})
        .then(items => res.json(items))
}); 
  
router.post('/',(req,res)=>{
    const newItem= new Item({
        "nom" : req.body.nom,
        "prenom" : req.body.prenom,
        "cin" : req.body.cin,
        "salaire" : req.body.salaire,
        "poste" : req.body.poste,
        "service" : req.body.service,
        "telephone" : req.body.telephone
    });

    newItem.save().then(item=>res.json(item));
    
});
router.delete('/:demp',(req,res)=>{
    Item.findOne({cin:req.params.demp})
     .then(item => item.remove().then(()=> res.json({success:true})))
     .catch(err => res.status(404).json({success:false}));
    
  });
//modifier les infos de employees
  router.put('/nom/:nemp',(req,res)=>{
    Item.findOneAndUpdate({"cin":req.params.nemp}, 
    {nom:req.body.nom}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/prenom/:pemp',(req,res)=>{
    Item.findOneAndUpdate({"cin":req.params.pemp}, 
    {prenom:req.body.prenom}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/poste/:rremp',(req,res)=>{
    Item.findOneAndUpdate({"cin":req.params.rremp}, 
    {poste:req.body.poste}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/salaire/:erpem',(req,res)=>{
    Item.findOneAndUpdate({"cin":req.params.erpem}, 
    {salaire:req.body.salaire}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/telephone/:eremp',(req,res)=>{
    Item.findOneAndUpdate({"cin":req.params.eremp}, 
    {telephone:req.body.telephone}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/service/:ep',(req,res)=>{
    Item.findOneAndUpdate({"cin":req.params.ep}, 
    {service:req.body.service}, { returnNewDocument: true })
    .then(items => res.json(items))
  })
  router.put('/cin/:mp',(req,res)=>{
    Item.findOneAndUpdate({"cin":req.params.mp}, 
    {cin:req.body.cin}, { returnNewDocument: true })
    .then(items => res.json(items))
  })


module.exports = router;
