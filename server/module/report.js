const db = require('../config/db');

//  查询符合条件
let searchOne = (data,dataTable) => {
    let {gameId,startTime = 1,endTime = 15596541245020} = data
    return new Promise((resolve,reject) => {
        db.query(`select * from ${dataTable} where gameId='${gameId}' and updateTime > ${startTime} and updateTime < ${endTime};`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

//  查询符合单一条件且去重
let searchOneDistinct = (data,distinct,dataTable) => {
    let {gameId,startTime = 1,endTime = 15596541245020} = data
    return new Promise((resolve,reject) => {
        db.query(`select distinct ${distinct} from ${dataTable} where gameId='${gameId}' and updateTime > ${startTime} and updateTime < ${endTime};`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let searchAllLimit = (dataTable,data) => {
    let {reportKey,gameId,opType,startTime = 1,endTime = 15596541245020} = data
    // console.log('reportKey',reportKey,gameId,opType,startTime,endTime)
    return new Promise((resolve,reject) => {
        db.query(`select * from ${dataTable} where reportKey = ${reportKey} and gameId = ${gameId} and opType = ${opType} and updateTime > ${startTime} and updateTime < ${endTime};`,[],(err,result,fields) => {
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
    searchAllLimit
}
