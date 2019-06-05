function RESJSON(req, res, next,code,msg,data = {}) {
    res.json({
        code:code,
        data:data,
        msg:msg
    })
}

function formatData(data) {
    let list = []
    for(let i in data) {
        list.push(data[i])
    }
    return list
}

module.exports = {
    RESJSON : RESJSON,
    formatData: formatData
}