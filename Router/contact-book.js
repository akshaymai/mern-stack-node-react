const express=require('express')
const router=express.Router()
const {Contact}=require('../Model/contact-book')

// CREATE-CONTACT
router.post('/create-contact',(req,res)=>{
 let newcontact=new Contact(req.body)  
 newcontact.save().then((data)=>{
    res.status(201).json(data)
 }).catch((err)=>{
   console.log(err)
    res.status(500).json(err)
 })
})


//READ -CONTACT

router.get('/',(req,res)=>{

    Contact.find().sort('name').then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        console.log(err)
        res.status(500).json(err)
    })
})



router.route('/edit-contact/:id').get((req, res) => {
  Contact.findById(req.params.id, (error, data) => {
    if (error) {
      return  res.status(500).json(err)
    } else {
      res.json(data)
    }
  })
})

// UPDATE-CONTACT

router.put('/update-contact/:id',(req,res)=>{

 Contact.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{

  if(err){
      console.log(err)
       return res.status(500).json(err)
  }
  else{
    console.log(' updated successfully !')
    return res.status(200).json(data)
  }
 })
})



// DELETE-CONTACT
 router.delete('/delete-contact/:id',(req,res)=>{
 console.log("rrrrrrr",req.params.id)
    Contact.findByIdAndRemove(req.params.id,(err,data)=>{

        if(err){
            console.log(err)
             return res.status(500).json(err)
        }
        else{
          console.log(' deleted successfully !')
          return res.status(200).json(data)
        }
    })

 })

// Search-Contact

router.post('/search-users',(req,res)=>{
  let contactPattern = new RegExp("^"+req.body.query)

   Contact.find({email:{$regex:contactPattern}})
  .select("_id email")
  .then(user=>{
      
      res.json(user)
  }).catch(err=>{
      console.log(err)
  })

})
module.exports=router