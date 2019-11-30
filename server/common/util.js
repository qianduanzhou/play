//  处理返回数据
function RESJSON(req, res, next,code,msg,data = {}) {
    res.json({
        code:code,
        data:data,
        msg:msg
    })
}

//  将对象值添加到数组
function formatData(data) {
    let list = []
    for(let i in data) {
        list.push(data[i])
    }
    return list
}

//  格式化时间
function formatDate(now) {
    now = Number(now)
    if(!isNaN(now)) {
        now = new Date(now)
    }
    var year=now.getFullYear(); 
    var month=(now.getMonth() + 1) / 10 < 1 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);  
    var date=now.getDate() / 10 < 1 ? '0' + now.getDate() : now.getDate(); 
    var hour=now.getHours() / 10 < 1 ? '0' + now.getHours() : now.getHours(); 
    var minute=now.getMinutes() / 10 < 1 ? '0' + now.getMinutes() : now.getMinutes(); 
    var second=now.getSeconds() / 10 < 1 ? '0' + now.getSeconds() : now.getSeconds(); 
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second; 
} 

module.exports = {
    RESJSON,
    formatData,
    formatDate
}