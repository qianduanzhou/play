const path = require('path')
const express = require('express');
const router = express.Router();
const util = require(path.resolve('common/util'))
const operate = require(path.resolve('common/dbOperate'))
const gameModule = require(path.resolve('module/game'))
//  查询
router.get('/gameList',async function(req, res, next) {
    let {page = 1, pageSize = 10, keyword = ''} = req.query,
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

//  查看商品详情
router.get('/gameDetail',async function(req, res, next) {
    let id = req.query.id
    operate.searchOne(id,'id','game').then(async (result) => {
        let detail = result[0]
        detail.levelList = []
        await operate.searchOne(id,'gameId','level').then((result) => {
            result.forEach((item) => {
                detail.levelList.push(item.name)
            })
        })
        util.RESJSON(req, res, next, 200, '查询成功', detail)
    })
})

//  编辑商品
router.post('/editGames',async function(req, res, next) {
    let { id, name, picUrl, type, hot, levelList } = req.body
    let dataObj = {
        id,
        name,
        picUrl,
        type,
        hot
    }
    levelList = JSON.parse(levelList)
    await gameModule.updateOne(dataObj,'game')
    await operate.deleteOne(id,'gameId','level')
    for(let i = 0;i < levelList.length; i ++) {
        let levelData = {
            gameId: id,
            gameName: name,
            name: levelList[i]
        }
        await operate.insertOne(levelData,'level')
    }
    util.RESJSON(req, res, next, 200, '编辑成功', {})
})

//  删除商品
router.post('/deleteGames',async function(req, res, next) {
    await operate.deleteOne(req.body.id,'id','game')
    util.RESJSON(req, res, next, 200, '删除成功', {})
})

module.exports = router;