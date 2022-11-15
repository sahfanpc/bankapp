const express = require("express");
const app=express()
const datasarvices=require('./sarvices/registersarvices')
const creditsarvices=require('./sarvices/credit')
const cors =require('cors');
const Depositsarvices=require('./sarvices/deposit')
const jwt=require("jsonwebtoken")

app.use(express.json())
app.use(cors({
    origin:'http://localhost:4200'
}))
app.get('/getapp',(req,res)=>{
    res.status(300).send("this is a get function")
})
app.post('/',(req,res)=>{
    res.send("this is a post function")
})



app.post('/register',(req,res)=>{
datasarvices.Register(req.body.accoundnumber,req.body.password,req.body.username,req.body.balance)
.then(result =>{
    res.status(result.statusCode).json(result)
})
})

const appmiddleware=(req,res,next)=>{
    console.log("Application specific middleware")
    next()
}
app.use(appmiddleware)
const jwtmiddleware=((req,res,next)=>{
    const token=req.header('x-access-token')
    console.log(token)
    const data=jwt.verify(token,'supersecretkey@123')
    console.log(data)
    if(req.body.accoundnumber==data.currentaccoundnumber){
        next()
    }
})
app.post('/login',(req,res)=>{
    datasarvices.Login(req.body.accoundnumber,req.body.password)
    .then(result =>{
        res.status(result.statusCode).json(result)
    })
    })
    app.post('/credit',(req,res)=>{
        creditsarvices.Credit(req.body.accoundnumber,req.body.password,req.body.username,req.body.adhar,req.body.salary)
        .then(result =>{
            res.status(result.statusCode).json(result)
        })
        })
        
        app.post('/deposit',jwtmiddleware,(req,res)=>{
            console.log("inside index depo")
            Depositsarvices.Deposit(req.body.accoundnumber,req.body.password,req.body.balance)
            .then(result=>{
                console.log("RESULTTTT",result)
                res.status(result.statusCode).json(result)
            })
        })
        app.post('/withdrow',(req,res)=>{
            Depositsarvices.Withdrow(req.body.accoundnumber,req.body.password,req.body.balance)
            .then(result=>{
                res.status(result.statusCode).json(result)
            })
        })
        app.post('/transaction',(req,res)=>{
            Depositsarvices.transaction(req.body.accoundnumber)
            .then(result=>{
                res.status(result.statusCode).json(result)
            })
        })

        app.get('/depositb/:accoundnumber',(req,res)=>{
            Depositsarvices.Deposit1(req.params.accoundnumber)
            .then(result=>{
                res.json(result)
                console.log('aa')
            })
        })

app.listen(4003,()=>{
    console.log("running on port 3000::")
})