var express = require('express');
var router = express.Router();
const util = require('../common/util')
const operate = require('../common/dbOperate')
const publish = require('../module/publish')
const order = require('../module/order')

//  购买详情
router.get('/buyDetail',async function (req,res,next) {
    let data = {
        userInfo:{},
        publishDetail:{}
    }
    await operate.searchOne(req.query.id,'id','publishList').then((result) => {
        data.publishDetail =  result[0]
    })
    await operate.searchOne(data.publishDetail.userId,'id','user').then((result) => {
        data.userInfo =  result[0]
    })
    util.RESJSON(req, res, next, 200, 'success',data)
})

//  购买
router.post('/buy',async function (req,res,next) {
    let money = -1,enMoney = -1,receivedOrders=0
    await operate.searchOne(req.body.userId,'id','user').then((result) => {
        if(result[0].money > req.body.number * req.body.money) {
            money = result[0].money -  req.body.number * req.body.money
        }
    })
    if(money >= 0) {
        await order.insertOne(req.body).then(()=>{})
        await order.updateUserMoney(money,req.body.userId).then(()=>{})
        await operate.searchOne(req.body.enterpriseId,'id','user').then((result) => {
            enMoney = parseInt(result[0].money) +  parseInt(req.body.number * req.body.money)
        })
        await operate.searchOne(req.body.enterpriseId,'id','user').then((result) => {
            receivedOrders = parseInt(result[0].receivedOrders) +  1
        })
        order.updateUserMoney(enMoney,req.body.enterpriseId)
        operate.updateOne(receivedOrders,"receivedOrders","user",req.body.enterpriseId,"id")
        util.RESJSON(req, res, next, 200, 'success')
    }else {
        util.RESJSON(req, res, next, 404, '余额不足')
    }

})


//  获取个人订单
router.get('/getOrder',async function (req,res,next) {
    let data = []
    await operate.searchOne(req.query.userId,"userId","orders").then((result) => {
        data = result
    })
    for(let i = 0; i < data.length; i ++) {
        await operate.searchOne(data[i].game,'name','game').then((result) => {
            data[i].gameDetail = result[0]
        })
    }
    for(let i = 0; i < data.length; i ++) {
        await operate.searchOne(data[i].userId,'id','user').then((result) => {
            data[i].userInfo = result[0]
        })
    }
    for(let i = 0; i < data.length; i ++) {
        await operate.searchOne(data[i].publishId,'id','publishList').then((result) => {
            data[i].publishDetail = result[0]
        })
    }
    util.RESJSON(req, res, next, 200, 'success',data)
})

//  获取客户订单
router.get('/getcustom',async function (req,res,next) {
    let data = []
    await operate.searchOne(req.query.enterpriseId,"enterpriseId","orders").then((result) => {
        data = result
    })
    for(let i = 0; i < data.length; i ++) {
        await operate.searchOne(data[i].game,'name','game').then((result) => {
            data[i].gameDetail = result[0]
        })
    }
    for(let i = 0; i < data.length; i ++) {
        await operate.searchOne(data[i].userId,'id','user').then((result) => {
            data[i].userInfo = result[0]
        })
    }
    for(let i = 0; i < data.length; i ++) {
        await operate.searchOne(data[i].publishId,'id','publishList').then((result) => {
            data[i].publishDetail = result[0]
        })
    }
    util.RESJSON(req, res, next, 200, 'success',data)
})


module.exports = router;