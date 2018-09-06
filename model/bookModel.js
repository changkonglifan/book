/**
 * 数据模型
 * 书详情
 */

const mongoose = require('../dataHelp/mongoose');
const logger = require('../config/log4');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    name: String,//书名
    id: String,//书名id
})

const model = mongoose.model('bookGet', bookSchema);
const bookModel = {};
/**
 * 保存
 * @param {*} params 
 */
bookModel.save = async (params)=>{
    var book = new model(params);
    logger.info(`保存----${params.name}-----成功`);
    return await book.save();
}
/**
 * 关闭数据库
 */
bookModel.close = async ()=>{
    return await mongoose.disconnect();;
}
/**
 * 获取列表第一列并删除
 */
bookModel.getFirstAndRemove = async () => {
    return await model.findOneAndRemove();
}
module.exports = bookModel;
