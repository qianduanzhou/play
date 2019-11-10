const express = require('express');
const router = express.Router();
const user = require('../module/user')
const util = require('../common/util')
const operate = require('../common/dbOperate')


router.post('/searchAll',async function (req,res,next) {
    let keys = req.body.keys,
    isGame = false,isId = false,isNickame = false
    await operate.searchAll("game").then((result) => {
        isGame = result.some(item => {
            if(item.name.includes(keys) && keys != '') {
                return true
            }
        });
    }) 
    if(!isGame) {
        if(!isNaN(keys)) {
            operate.searchLike(keys,['id'],"user").then((result) => {
                if(result.length > 0) {
                    util.RESJSON(req, res, next, 200, 'success',result)
                }else {
                    util.RESJSON(req, res, next, 404, '未找到')
                }
            })
        }else {
            operate.searchLike(keys,['nickname'],"user").then((result) => {
                if(result.length > 0) {
                    util.RESJSON(req, res, next, 200, 'success',result)
                }else {
                    util.RESJSON(req, res, next, 404, '未找到')
                }
            })
        }
    }else {
        operate.searchLike(keys,['game'],"publishList").then(async (result) => {
            if(result.length > 0) {
                let userInfos = []
                for(let i = 0; i < result.length; i ++) {
                    await operate.searchOne(result[i].userId,"id","user").then((userInfo) => {
                        if(userInfo.length > 0) {
                            userInfos.push(userInfo[0])
                        }
                    })
                }
                util.RESJSON(req, res, next, 200, 'success',userInfos)
            }else {
                util.RESJSON(req, res, next, 404, '未找到')
            }
        })
    }
})


router.post('/searchOne',function (req,res,next) {
    let type = req.body.type,
        userId = req.body.userId,
        keys = req.body.keys,
        id = ''
    if(type == "关注") {
        id = "userId"
    }else {
        id = "enterpriseId"
    }
    operate.searchOne(req.body.userId,id,"concern").then(async (result) => {
        let list = [],inId = ''
        for(let i = 0;i < result.length; i ++) {
            if(type == "关注") {
                inId = result[i].enterpriseId
            }else {
                inId = result[i].userId
            }
            await operate.searchOne(inId,"id","user").then((user) => {
                if(user[0].nickname.includes(req.body.keys)) {
                    list.push(user[0])
                }
            })
        }
        util.RESJSON(req, res, next, 200, 'success',list)
    })
})


module.exports = router;