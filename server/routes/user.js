const express = require('express');
const router = express.Router();
const user = require('../module/user')
const util = require('../common/util')
const operate = require('../common/dbOperate')
const WXBizDataCrypt = require('../common/WXBizDataCrypt')

//  注册
router.post('/register', function(req, res, next) {
    let username = req.body.username,
        password = req.body.password,
        nickname = req.body.nickname
    operate.searchOne(username,'username','user').then((result) => {
        if(result.length == 0) {
            insertOneUser(username,password,nickname,req, res, next)
        }else {
            let msg="该用户已存在，请重新注册"
            util.RESJSON(req, res, next, 404, msg)
        }
    })
});


//  登录
router.post('/login',function (req, res, next) {
    let username = req.body.username,
        password = req.body.password
    operate.searchOne(username,'username','user').then((result) => {
        if(result.length == 0) {
            let msg = "该账号不存在"
            util.RESJSON(req, res, next, 404, msg)
        }else if(password != result[0].password){
            let msg = "密码错误"
            util.RESJSON(req, res, next, 404, msg)
        }else {
            let msg = "登录成功"
            util.RESJSON(req, res, next, 200, msg, result)
        }
    })
})

//  获取当前微信信息
router.post('/wxGetInfo',function (req, res, next) {
    let appId = req.body.appId,
        sessionKey = req.body.sessionKey,
        encryptedData = req.body.encryptedData,
        iv = req.body.iv
    let pc = new WXBizDataCrypt(appId, sessionKey)
    let data = pc.decryptData(encryptedData , iv)  
    util.RESJSON(req, res, next, 200, 'success',data)
})

//  模仿微信登录
router.post('/wxLogin',function (req,res,next) {
    operate.searchOne(req.body.username,"username","user").then((result) => {
        if(result.length == 0) {
            user.insertOneAll(req.body).then(() => {
                util.RESJSON(req, res, next, 200, '注册成功',result)
            })
        }else {
            util.RESJSON(req, res, next, 200, '已注册',result)
        }
    })
})

//  插入消息
router.post('/setMessage',function (req,res,next) {
    user.insertOneMessage(req.body).then((result) => {
        util.RESJSON(req, res, next, 200, 'success')
    })
})

//  获取消息
router.get('/getMessage',function (req,res,next) {
    operate.searchOne(req.query.userId,"otherId","message").then(async (result) => {
        for(let i = 0; i < result.length; i ++) {
            await operate.searchOne(result[i].userId,"id","user").then((userInfo) => {
                result[i].userInfo = userInfo[0]
            })
        }
        util.RESJSON(req, res, next, 200, 'success',result)
    })
})

//  插入一条数据
function insertOneUser(username,password,nickname,req, res, next) {
    user.insertOneUser(username,password,nickname).then(() => {
        util.RESJSON(req, res, next, 200, '注册成功')
    })
}

module.exports = router;
