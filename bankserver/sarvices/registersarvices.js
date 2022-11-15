
const jwt=require('jsonwebtoken')
 const  db = require('./db')
 const Register=(accoundnumber,password,username,balance)=>{
  return db.Bankapp.findOne({accoundnumber})
  .then(bankapp=>{
    console.log(bankapp)
if(bankapp){
  return{
    statusCode:420,
    status:false,
    message:"User already Exists"
  }
}else{
  const newBankapp = new db.Bankapp({
    accoundnumber,
    password,
    username,
    balance,
  transaction:[]
  })
  newBankapp.save()
  return {
    statusCode:212,
    status:true,
    message:"user added successfully"
  }
}
  })
}
const Login=(accoundnumber,password)=>{
return db.Bankapp.findOne({accoundnumber,password})
.then(bankapp=>{
  if(bankapp){
    accoundnumber=bankapp.accoundnumber
    username=bankapp.username
    balance=bankapp.balance
    const token =jwt.sign({
      currentaccoundnumber:accoundnumber
    },'supersecretkey@123')
    
    return{
      statusCode:212,
      status:true,
      message:"Login seccessfully",
     

      token,
      currentaccoundnumber:accoundnumber,
      username:username,
      balance:balance,
      password:password
    }
  }else{
return{
  statusCode:422,
  status:false,
  message:"incorrect password"
}
    }

    }
  )
}

module.exports={Register,Login}