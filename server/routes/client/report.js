const path = require('path')
const express = require('express');
const router = express.Router();
const user = require(path.resolve('module/user'))
const util = require(path.resolve('common/util'))
const operate = require(path.resolve('common/dbOperate'))

router.post('/dataReport',function (req,res,next) {
    let {
        data,
        date,
        appid,
        userId,
        platform,
        system_version,
        brand,
        model,
        wxversion,
        wx_language
    } = req.body
    data.forEach((item) => {
        let reportKey = item.reportKey || 'NULL',
        gameId = item.gameId || 'NULL',
        page = item.page || 'NULL',
        opType = item.opType || 'NULL',
        updateTime = new Date().getTime()
        dataObj = {
            gameId,
            reportKey,
            page,
            opType,
            date,
            appid,
            userId,
            platform,
            system_version,
            brand,
            model,
            wxversion,
            wx_language,
            updateTime
        }
        operate.insertOne(dataObj,'report').then(async (result) => {
            console.log('result',result)
            util.RESJSON(req, res, next, 200, 'success', {})
        })
    })
})

module.exports = router