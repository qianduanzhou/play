const db = require('../config/db');
const utils = require('../common/util')


let insertOnePublish = (data) => {
    data = utils.formatData(data)
    return new Promise((resolve,reject) => {
        db.query('insert into publishList (userId,game,gameType,level,moneyType,moneyNum,introduction,updateTime,gameId) values (?,?,?,?,?,?,?,?,?)',[...data],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}


let searchOne = (data) => {
    let userId = data.userId,
        gameId = data.gameId
        console.log(data)
    return new Promise((resolve,reject) => {
        db.query(`select * from publishList where userId=${userId} and gameId='${gameId}'`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let searchAll = (data,sqlKey) => {
    return new Promise((resolve,reject) => {
        db.query(`select * from publishList where ${sqlKey}='${data}'`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })   
}

let updateOne = (data) => {
    let id = data.id
        level = data.level,
        moneyType = data.moneyType,
        moneyNum = data.moneyNum,
        introduction = data.introduction,
        updateTime = data.updateTime
    return new Promise((resolve,reject) => {
        db.query(`update publishList set level="${level}",moneyType="${moneyType}",moneyNum="${moneyNum}",introduction="${introduction}",updateTime="${updateTime}" where id="${id}"`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}





module.exports = {
    insertOnePublish,
    searchAll,
    updateOne,
    searchOne
}