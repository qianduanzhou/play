const path = require('path')
const express = require('express');
const router = express.Router();
const util = require(path.resolve('common/util'))
const operate = require(path.resolve('common/dbOperate'))

//  查询用户列表
router.get('/customerList',async function(req, res, next) {
    let {page = 1, pageSize = 10, keyword = ''} = req.query,
        data = {
            dataList: [],
            total: 0
        }
    await operate.searchAllCount('user', keyword, ['username', 'id', 'nickname']).then((result) => {
        console.log('searchAllCount', result)
        data.total = result[0]['count(*)']
    })
    await operate.searchAllLimit('user', page, pageSize, keyword, ['username', 'id', 'nickname']).then((result) => {
        if(result.length > 0) {
            let msg = "查询成功"
            data.dataList = result
            util.RESJSON(req, res, next, 200, msg, data)
        }else {
            let msg = "暂无数据"
            data.dataList = []
            util.RESJSON(req, res, next, 404, msg, data)
        }
    })
})

//  查询用户发布列表
router.get('/pushList',async function(req, res, next) {
    let userId = req.query.userId,
    data = {}
    operate.searchOne(userId,'userId','publishlist').then((result) => {
        if(result.length > 0) {
            let msg = "查询成功"
            data.dataList = result
            console.log('data',data)
            util.RESJSON(req, res, next, 200, msg, data)
        }else {
            let msg = "暂无数据"
            util.RESJSON(req, res, next, 404, msg, data)
        }
    })
})

module.exports = router;