const db = require('../config/db');

//  查询符合单一条件
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

//  查询符合单一条件且去重
let searchOneDistinct = (data,sqlKey,distinct,dataTable) => {
    return new Promise((resolve,reject) => {
        db.query(`select distinct ${distinct} from ${dataTable} where ${sqlKey}='${data}'`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}


//  查询全部数据
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
//  查询前几条数据
let searchAllLimit = (dataTable,page,pageSize,data,sqlKeyList,startTime = 1,endTime = 15596541245020) => {
    return new Promise((resolve,reject) => {
        db.query(`select * from ${dataTable} where updateTime > ${startTime} and updateTime < ${endTime} and concat(${sqlKeyList.join(',')}) like '%${data}%' limit ${(page - 1) * pageSize},${pageSize};`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })   
}
//  查询总数
let searchAllCount = (dataTable,data,sqlKeyList,startTime = 1,endTime = 15596541245020) => {
    return new Promise((resolve,reject) => {
        db.query(`select count(*) from ${dataTable} where updateTime > ${startTime} and updateTime < ${endTime} and concat(${sqlKeyList.join(',')}) like '%${data}%';`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    }) 
}
//  按关键字查询
let searchLike = (data,sqlKeyList,dataTable) => {
    return new Promise((resolve,reject) => {
        db.query(`select * from ${dataTable} where concat(${sqlKeyList.join(',')}) like '%${data}%'`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

//  插入一条数据
let insertOne = (dataObj,dataTable) => {
    let keys = [],
        values = []
    for(let key in dataObj) {
        keys.push(key)
        values.push(dataObj[key].toString())
    }
    return new Promise((resolve,reject) => {
        db.query(`insert into ${dataTable} (${keys.join(',')}) values (${new Array(keys.length).fill('?').join(',')});`,[...values],(err,result,fields) => {
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
    searchOneDistinct,
    searchAll,
    searchAllLimit,
    searchAllCount,
    searchLike,
    deleteOne,
    updateOne,
    insertOne
}