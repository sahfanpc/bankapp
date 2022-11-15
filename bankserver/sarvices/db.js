const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/BANKAPP',{
useNewUrlParser:true
})

const Bankapp=mongoose.model('Bankapp',{
    accoundnumber:Number,
    password:String,
    username:String,
    balance:Number,
    transaction:Array
    
})
const Credituser=mongoose.model('Credituser',{
    accoundnumber:Number,
    password:String,
    username:String,
    adhar:Number,
    salary:Number,
})
module.exports={Bankapp,Credituser}
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhist""/BANKAPPNEW',{
// usenewurl parser:true
// })

// const User=mongoose.model('User',{
// acno:Number,
// name:String,
// pswd:string,
// balance:Number,
// transaction:Array
// })
// module.export={user}

// ..
