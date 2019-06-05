const db = require('../config/db');
const util = require('../common/util');

let insertOne = (data) => {
    data = util.formatData(data)
    console.log(data)
    return new Promise((resolve,reject) => {
        db.query(`insert into footmark (userId,enterpriseId,game,updateTime) values (?,?,?,?)`,[...data],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })   
}


module.exports = {
    insertOne
}