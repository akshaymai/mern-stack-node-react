const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const cros=require('cors')
const {mongo_url}=require('./config/keys')


 
app.use(cros())
app.use(express.json())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
  

// DB Connection 
mongoose.connect(mongo_url,{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('connected',()=>{
    console.log('connected sucessfully')
})
mongoose.connection.on('error',(err)=>{
    console.log(' not connected ',err)
})


// Routers path
app.use('/contact',require('./Router/contact-book'))



if(process.env.NODE_ENV == 'production'){
    app.use(express.static('frontend/build'))
    const path=require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}



const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})