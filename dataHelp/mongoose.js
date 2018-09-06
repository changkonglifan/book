/**
 * 操作mongo 数据库
 */
const { mongodb }  = require("../config");
var mongoose = require('mongoose');
const logger = require('../config/log4');
// mongoose.connection.openUri(`mongodb://${mongodb.url}:${mongodb.port}/${mongodb.collection}`); //连接到一个book的数据库
mongoose.connect(`mongodb://${mongodb.url}:${mongodb.port}/${mongodb.collection}`, { useNewUrlParser: true })
mongoose.Promise = require('bluebird');
const db = mongoose.connection;
//数据库链接成功
db.once('open', () => {
   logger.info('连接数据库成功')
})
//数据库链接失败
db.on("error", function (err) {
    logger.error("mongo connection error" + err)
})
//断开链接
db.on("disconnected", function (err) {
    logger.info("mongo disconnected")
})
//关闭
process.on("SIGINT", function () {
    db.close(function () {
        process.exit(0);
    })
})
module.exports = mongoose;