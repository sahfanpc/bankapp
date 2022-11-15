

const db = require('./db')
const Credit = (accoundnumber, password, username, adhar, salary) => {
    return db.Credituser.findOne({ accoundnumber })
        .then(Credituser => {
            console.log(Credituser)
            if (Credituser) {
                return {
                    statusCode: 422,
                    status: false,
                    message: "User already Exists"
                }
            } else {
                const newCredituser = new db.Credituser({
                    accoundnumber,
                    password,
                    username,
                    adhar,
                    salary,
                })
                newCredituser.save()
                return {
                    statusCode: 212,
                    status: true,
                    message: "user added successfully"
                }
            }
        })
}
module.exports={Credit}