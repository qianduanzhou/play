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

let updateOne = (data,dataTable) => {
    let { id,name,picUrl,type,hot } = data
    console.log('data',data)
    return new Promise((resolve,reject) => {
        db.query(`update ${dataTable} set name="${name}",picUrl="${picUrl}",type="${type}",hot="${hot}" where id="${id}"`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}




module.exports = {
    searchHot,
    updateOne
}
