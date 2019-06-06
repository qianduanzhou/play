const db = require('../config/db');
const util = require('../common/util')


let insertOneUser = (username,password,nickname) => {
    return new Promise((resolve,reject) => {
        db.query('insert into user (username,password,nickname) values (?,?,?)',[username,password,nickname],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let insertOneAll = (data) => {
    data = util.formatData(data)
    return new Promise((resolve,reject) => {
        db.query(`insert into user (username,password,nickname,userPic,sex,age) values (?,?,?,?,?,?)`,[...data],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let insertOneMessage = (data) => {
    data = util.formatData(data)
    return new Promise((resolve,reject) => {
        db.query(`insert into message (userId,enterpriseId,type,updateTime) values (?,?,?,?)`,[...data],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let insertOneConcern = (userId,enterpriseId) => {
    return new Promise((resolve,reject) => {
        db.query(`insert into concern (userId,enterpriseId) values (?,?)`,[userId,enterpriseId],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

let searchConcern = (userId,enterpriseId) => {
    return new Promise((resolve,reject) => {
        db.query(`select * from concern where userId=${userId} and enterpriseId=${enterpriseId}`,[],(err,result,fields) => {
            if(err) {
                reject(err)
            }else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    insertOneUser,
    insertOneAll,
    insertOneMessage,
    insertOneConcern,
    searchConcern
}