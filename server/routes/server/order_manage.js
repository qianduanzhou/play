const path = require('path')
const express = require('express');
const router = express.Router();
const util = require(path.resolve('common/util'))
const operate = require(path.resolve('common/dbOperate'))
const nodeExcel = require("excel-export")

//  excel结构
let conf = {}
let cols = ['订单Id','发布ID','用户','商家','商品名','数量','金额','备注','陪玩时间','创建时间']
conf.cols = []
for(var i = 0; i < cols.length; i++){
    var tits = {}; //创建表头数据所对应的类型,其中包括 caption内容 type类型
    tits.caption = cols[i]; //添加内容
    tits.type = 'string'; //添加对应类型，这类型对应数据库中的类型，入number，data但一般导出的都是转换为string类型的
    conf.cols.push(tits); //将每一个表头加入cols中
    conf.rows = []
}

//  查询
router.get('/orderList',async function(req, res, next) {
    let {page = 1, pageSize = 10, keyword = '', startTime = 1,endTime = 15596541245020,isExcel = false} = req.query,
        data = {
            dataList: [],
            total: 0
        }
        console.log('isExcel',isExcel)
    await operate.searchAllCount('orders', keyword, ['id', 'game'],startTime,endTime).then((result) => {
        console.log('searchAllCount', result)
        data.total = result[0]['count(*)']
    })
    await operate.searchAllLimit('orders', page, pageSize, keyword, ['id', 'game'], startTime, endTime).then(async (result) => {
        if(result.length > 0) {
            let msg = "查询成功"
            data.dataList = result
            let {dataList} = data
            for(let i = 0;i < dataList.length; i ++) {
                await operate.searchOne(dataList[i].userId,'id','user').then((result) => {
                    dataList[i].userName = result[0].username
                })
                await operate.searchOne(dataList[i].enterpriseId,'id','user').then((result) => {
                    dataList[i].enterpriseName = result[0].username
                })
            }
            if(isExcel) {
                dataList.forEach((item) => {
                    conf.rows.push([item.id.toString(),item.publishId.toString(),item.userName,item.enterpriseName,item.game,item.number.toString(),item.money.toString(),item.remarks,item.time,util.formatDate(item.updateTime)])
                })
                console.log('conf',conf)
                let excelResult = nodeExcel.execute(conf);//将所有数据写入nodeExcel中
                res.setHeader('Content-Type', 'application/vnd.openxmlformats;charset=utf-8')
                res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");   
                res.end(excelResult, 'binary');
            } else {
                util.RESJSON(req, res, next, 200, msg, data)
            }
        }else {
            let msg = "暂无数据"
            util.RESJSON(req, res, next, 404, msg, data)
        }
    })
})

module.exports = router;