const path = require('path')
const express = require('express');
const router = express.Router();
const util = require(path.resolve('common/util'))
const operate = require(path.resolve('common/dbOperate'))
const report = require(path.resolve('module/report'))

router.get('/reportList',async function(req, res, next) {

    let {page = 1, pageSize = 10, keyword = '', startTime = 1,endTime = 15596541245020} = req.query,
        data = {
            dataList: [],
            total: 0
        }
        await operate.searchAllCount('game', keyword, ['id', 'name']).then((result) => {
            data.total = result[0]['count(*)']
        })
        
        await operate.searchAllLimit('game', page, pageSize, keyword, ['id', 'name']).then(async (result) => {
            for(let i = 0; i < result.length; i ++) {
                let resultData = {
                        id: '',
                        game: '',
                        pv: '',
                        uv: '',
                        pvRate: '',
                        uvRate: '',
                    }
                resultData.id = result[i].id
                resultData.game = result[i].name
                await report.searchOne({
                    gameId:result[i].id,
                    startTime,
                    endTime
                },'report').then((result2) => {
                    resultData.pv = result2.length
                })
                await report.searchOneDistinct({
                    gameId:result[i].id,
                    startTime,
                    endTime
                },'userId','report').then((result2) => {
                    resultData.uv = result2.length
                })
                await report.searchAllLimit('report', {
                    reportKey: '90074',
                    opType: '1',
                    gameId: resultData.id,
                    startTime,
                    endTime
                }).then(async (result2) => {
                    resultData.pvRate = resultData.pv != 0 ? ((result2.length / resultData.pv)*100).toFixed(2) + '%' : '0.00%'
                    resultData.uvRate = resultData.uv != 0 ? ((result2.length / resultData.uv)*100).toFixed(2) + '%' : '0.00%'
                })
                data.dataList.push(resultData)
            }
            
            if(result.length > 0) {
                let msg = "查询成功"
                util.RESJSON(req, res, next, 200, msg, data)
            }else {
                let msg = "暂无数据"
                util.RESJSON(req, res, next, 404, msg, data)
            }
        })
})

module.exports = router;