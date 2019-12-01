const db = require('../config/db');
const util = require('../common/util')

let insertOne = (data) => {
    data = util.formatData(data)
    return new Promise((resolve,reject) => {
        db.query('insert into orders (userId,enterpriseId,publishId,gameId,game,number,money,remarks,time,updateTime) values (?,?,?,?,?,?,?,?,?,?)',[...data],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let updateUserMoney = (money,userId) => {
    return new Promise((resolve,reject) => {
        db.query(`update user set money="${money}" where id="${userId}"`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })    
}

module.exports = {
    insertOne,
    updateUserMoney
}
