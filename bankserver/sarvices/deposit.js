const db = require('./db')
const datasarvices = require('./registersarvices')


const Deposit = (accoundnumber, password, balance) => {
    console.log("inside service")
    var amount = parseInt(balance)

    return db.Bankapp.findOne({ accoundnumber, password })
        .then(bankapp => {
            if (bankapp) {
                bankapp.balance = Number(bankapp.balance) + Number(balance)
                bankapp.transaction.push({
                    type: "deposit",
                    amount: bankapp.balance,
                    message: "success"
                })
                bankapp.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: "amound added successfully",
                    amount: bankapp.balance
                }
            } else {
                return {
                    statusCode: 422,
                    status: false,
                    message: "invalid accoundnumber"
                }
            }
        })
}

const Withdrow = (accoundnumber, password, balance) => {
    var amount = parseInt(balance)

    return db.Bankapp.findOne({ accoundnumber, password })
        .then(bankapp => {
            if (bankapp) {
                bankapp.balance = Number(bankapp.balance) - Number(balance)
                bankapp.transaction.push({
                    type: "withdrow",
                    amount: bankapp.balance,
                    message: "success"
                })
                bankapp.save()
                return {
                    statusCode: 212,
                    status: true,
                    message: "amound debitted",
                    amount: bankapp.balance
                }
            } else {
                return {
                    statusCode: 422,
                    status: false,
                    message: "invalid accoundnumber"
                }
            }
        })
}
const transaction = (accoundnumber) => {
    return db.Bankapp.findOne({ accoundnumber })
    
        .then(bankapp => {
            if (bankapp) {
                return {
                    statusCode: 212,
                    status: true,
                    messege: "transaction history",
                    transaction: bankapp.transaction
                }
            } else {
                return {
                    statusCode: 422,
                    status: false,
                    messege:""
                }
            }
        })
}
const Deposit1 =(accoundnumber)=>{
    return db.Bankapp.findOne({accoundnumber})
    .then(bankapp =>{
        if(bankapp){
            return bankapp
                
        }
    })
}
module.exports = {Deposit,Withdrow,transaction,Deposit1}