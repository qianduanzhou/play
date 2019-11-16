const path = require('path')
const express = require('express');
const router = express.Router();
const util = require(path.resolve('common/util'))
const operate = require(path.resolve('common/dbOperate'))

//  查询
router.get('/gameList',async function(req, res, next) {
    let page = req.query.page,
        pageSize = req.query.pageSize,
        keyword = req.query.keyword
        data = {
            dataList: [],
            total: 0
        }
    await operate.searchAllCount('game', keyword, ['name', 'type']).then((result) => {
        console.log('searchAllCount', result)
        data.total = result[0]['count(*)']
    })
    await operate.searchAllLimit('game', page, pageSize, keyword, ['name', 'type']).then(async (result) => {
        if(result.length > 0) {
            let msg = "查询成功"
            data.dataList = result
            let {dataList} = data
            for(let i = 0;i < dataList.length; i ++) {
                await operate.searchOne(dataList[i].id,'gameId','level').then((result) => {
                    dataList[i].levelList = result
                })
            }
            util.RESJSON(req, res, next, 200, msg, data)
        }else {
            let msg = "暂无数据"
            util.RESJSON(req, res, next, 404, msg, data)
        }
    })
})

//  新建商品
router.post('/createGames',async function(req, res, next) {
    let { name, picUrl, type, hot, levelList } = req.body
    let dataObj = {
        name,
        picUrl,
        type,
        hot
    }
    levelList = JSON.parse(levelList)
    operate.searchOne(name,'name','game').then((result) => {
        if(result.length == 0) {
            operate.insertOne(dataObj,'game').then(async (result) => {
                console.log('result',result)
                for(let i = 0;i < levelList.length; i ++) {
                    let levelData = {
                        gameId: result.insertId,
                        gameName: name,
                        name: levelList[i]
                    }
                    console.log('levelData',levelData)
                    await operate.insertOne(levelData,'level')
                }
                util.RESJSON(req, res, next, 200, '创建成功', {})
            })
        }else {
            let msg="该商品已存在"
            util.RESJSON(req, res, next, 404, msg)
        }
    })
})

module.exports = router;