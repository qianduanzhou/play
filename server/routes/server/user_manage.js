const path = require('path')
const express = require('express');
const router = express.Router();
// const user_manage = require('../module/user_manage')
const util = require(path.resolve('common/util'))
const operate = require(path.resolve('common/dbOperate'))
const JwtUtil = require(path.resolve('common/jwt'))

//  登录
router.post('/login',function (req, res, next) {
    let username = req.body.username,
        password = req.body.password
    operate.searchOne(username,'username','user_manage').then((result) => {
        console.log('result',result)
        let id = result[0].id.toString();
        // 将用户id传入并生成token
        let jwt = new JwtUtil(id);
        let data = {
            username: username,
            token: jwt.generateToken(),
            auth: result[0].auth
        }
        if(result.length == 0) {
            let msg = "该账号不存在"
            util.RESJSON(req, res, next, 404, msg)
        }else if(password != result[0].password){
            let msg = "密码错误"
            util.RESJSON(req, res, next, 404, msg)
        }else {
            let msg = "登录成功"
            util.RESJSON(req, res, next, 200, msg, data)
        }
    })
})

//  注册
router.post('/register', function(req, res, next) {
    let dataObj = {
        username: req.body.username,
        password : req.body.password
    }
    operate.searchOne(req.body.username,'username','user_manage').then((result) => {
        console.log(result)
        if(result.length == 0) {
            operate.insertOne(dataObj,'user_manage').then(() => {
                util.RESJSON(req, res, next, 200, 'success', {})
            })
        }else {
            let msg="该用户已存在，请重新注册"
            util.RESJSON(req, res, next, 404, msg)
        }
    })
});

//  查询
router.get('/userList',async function(req, res, next) {
    let page = req.query.page,
        pageSize = req.query.pageSize,
        keyword = req.query.keyword
        data = {
            dataList: [],
            total: 0
        }
    await operate.searchAllCount('user_manage', keyword, ['username','id']).then((result) => {
        console.log('searchAllCount', result)
        data.total = result[0]['count(*)']
    })
    await operate.searchAllLimit('user_manage', page, pageSize, keyword, ['username','id']).then((result) => {
        if(result.length > 0) {
            let msg = "查询成功"
            data.dataList = result
            util.RESJSON(req, res, next, 200, msg, data)
        }else {
            let msg = "暂无数据"
            util.RESJSON(req, res, next, 404, msg, data)
        }
    })
})

// 删除
router.post('/delete', function(req, res, next) {
    operate.deleteOne(req.body.id,'id','user_manage').then((result) => {
        console.log(result)
        util.RESJSON(req, res, next, 200, 'success', {})
    })
});

router.get('/test',function(req, res, next) {
    // console.log(req.query)
})

module.exports = router;