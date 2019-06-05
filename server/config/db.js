var mysql = require("mysql")
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"play"
})//数据库连接配置

function query(sql,data,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, data, function (err,rows) {
            callback(err,rows)
            connection.release()
        })
    })
}//对数据库进行增删改查操作的基础

exports.query = query