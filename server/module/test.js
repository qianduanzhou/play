const db = require('../config/db');

db.query(`select * from game`,[],(err,result,fields) => {
    if(err) {
        reject(err)
    }else {
        console.log('result',result)
        for(let i = 0; i < result.length; i ++) {
            db.query(`update game set picUrl="http://localhost:3000/public${result[i].picUrl}" where id="${result[i].id}"`,[],(err,result,fields) => {
                if(err) {
                    reject(err)
                }else {
                    console.log(result)
                }
            })
        }
    }
})