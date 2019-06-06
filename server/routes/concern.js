const express = require('express');
const router = express.Router();
const user = require('../module/user')
const util = require('../common/util')
const operate = require('../common/dbOperate')


//  关注商家
router.post('/concern',function (req,res,next) {
    let id = ''
    user.searchConcern(req.body.userId,req.body.enterpriseId).then(async (result) => {
        if(result.length == 0) {
            await user.insertOneConcern(req.body.userId,req.body.enterpriseId).then((result) => {
                id = result.insertId
            })
            await operate.searchOne(req.body.enterpriseId,"id","user").then((user) => {
                let fans = user[0].fans + 1
                operate.updateOne(fans,"fans","user",req.body.enterpriseId,"id").then(() => {})
            })
            
            await operate.searchOne(req.body.userId,"id","user").then((user) => {
                let concern = user[0].concern + 1
                operate.updateOne(concern,"concern","user",req.body.userId,"id").then(() => {
                    util.RESJSON(req, res, next, 200, 'success',id)
                })
            })
        }
    })
})

// 检查关注信息
router.get('/checkConcern',function (req,res,next) {
    user.searchConcern(req.query.userId,req.query.enterpriseId).then((result) => {
        if(result.length > 0) {
            util.RESJSON(req, res, next, 200, 'success',result[0])
        }
    })
})

//  取消关注
router.get('/unConcern',function (req,res,next) {
    operate.deleteOne(req.query.concernId,"id","concern").then(() => {})
    operate.searchOne(req.query.enterpriseId,"id","user").then((user) => {
        let fans = user[0].fans - 1
        operate.updateOne(fans,"fans","user",req.query.enterpriseId,"id").then(() => {})
    })
    operate.searchOne(req.query.userId,"id","user").then((user) => {
        let concern = user[0].concern - 1
        operate.updateOne(concern,"concern","user",req.query.userId,"id").then(() => {
            util.RESJSON(req, res, next, 200, 'success')
        })
    })
})

//  获取关注列表
router.get('/concernList',function (req,res,next) {
    if(req.query.type == "关注") {
        operate.searchOne(req.query.userId,"userId","concern").then(async (result) => {
            for(let i = 0; i < result.length; i ++) {
                await operate.searchOne(result[i].enterpriseId,"id","user").then((user) =>{
                    result[i].userInfo = user[0]
                })
            }
            util.RESJSON(req, res, next, 200, 'success',result)
        })
    }else {
        operate.searchOne(req.query.userId,"enterpriseId","concern").then(async (result) => {
            for(let i = 0; i < result.length; i ++) {
                await operate.searchOne(result[i].userId,"id","user").then((user) =>{
                    result[i].userInfo = user[0]
                })
            }
            util.RESJSON(req, res, next, 200, 'success',result)
        })
    }
})

module.exports = router