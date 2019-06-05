const db = require('../config/db');

let searchHot = () => {
    return new Promise((resolve,reject) => {
        db.query(`select * from game where hot=1`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })   
}






module.exports = {
    searchHot
}
