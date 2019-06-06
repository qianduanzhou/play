const db = require('../config/db');

let searchOne = (data,sqlKey,dataTable) => {
    return new Promise((resolve,reject) => {
        db.query(`select * from ${dataTable} where ${sqlKey}='${data}'`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let searchAll = (dataTable) => {
    return new Promise((resolve,reject) => {
        db.query(`select * from ${dataTable}`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })   
}

let deleteOne = (data,sqlKey,dataTable) => {
    return new Promise((resolve,reject) => {
        db.query(`delete from ${dataTable} where ${sqlKey}="${data}"`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let updateOne = (data,dataKey,dataTable,condition,condKey) => {
    return new Promise((resolve,reject) => {
        db.query(`update ${dataTable} set ${dataKey}="${data}" where ${condKey}="${condition}"`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}



module.exports = {
    searchOne,
    searchAll,
    deleteOne,
    updateOne
}