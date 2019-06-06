const express = require('express');
const router = express.Router();
const user = require('../module/user')
const util = require('../common/util')
const operate = require('../common/dbOperate')
const footmark = require('../module/footmark')
const publish = require('../module/publish')

//  存储浏览足迹
router.post('/setFootmark',function (req,res,next) {
    operate.searchOne(req.body.userId,"id","user").then(async (result) => {
        
        let foot = parseInt(result[0].footmark)+1
        operate.updateOne(foot,"footmark","user",req.body.userId,"id").then(() => {})
        footmark.insertOne(req.body).then(() => {
            util.RESJSON(req, res, next, 200,'success')
        })
    })
})

//  获取浏览足迹
router.get('/getFootmark',async function (req,res,next) {
    let data = []
    await operate.searchOne(req.query.userId,"userId","footmark").then((result) => {
        data = result
    })
    
    for(let i = 0;i < data.length; i ++) {
        let publishData = {
            userId:data[i].enterpriseId,
            game:data[i].game,
        }
        await operate.searchOne(data[i].enterpriseId,"id","user").then((result) => {
            data[i].userInfo = result[0]
        })
        await publish.searchOne(publishData).then((result) => {
            data[i].publishDetail = result[0]
        })
    }
    util.RESJSON(req, res, next, 200,'success',data)
})


//  清空所有足迹
router.post('/clear',function (req,res,next) {
    operate.deleteOne(req.body.userId,"userId","footmark").then(() => {
        operate.updateOne(0,"footmark","user",req.body.userId,"id").then(() => {
            util.RESJSON(req, res, next, 200,'success')
        })
    })
})

module.exports = router