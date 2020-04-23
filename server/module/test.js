const db = require('../config/db');
const replaceUrl = 'http://192.168.1.106:3000/'
const dbName = 'user'
const key = 'userPic'
db.query(`select * from ${dbName}`,[],(err,result,fields) => {
    if(err) {
        console.log(err)
    }else {
        console.log('result',result)
        for(let i = 0; i < result.length; i ++) {
            let url = result[i][key].replace(/http:\/\/.+?\//g,replaceUrl)
            db.query(`update ${dbName} set ${key}="${url}" where id="${result[i].id}"`,[],(err,result,fields) => {
                if(err) {
                    console.log(err)
                }else {
                    console.log(result)
                }
            })
        }
    }
})