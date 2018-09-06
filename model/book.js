/**
 * 数据模型
 * 书本信息
 */

const mongoose = require('../dataHelp/mongoose');
const logger = require('../config/log4');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    id: String,//书名id
    name: String,//书名
    author: String,//作者
    authorId: String,//作者ID
    time: String,//时间
    chapters:Array,//章节
    txtNums: Number,//字数

})

const model = mongoose.model('book', bookSchema);

const bookModel = {};
/**
 * 保存书本信息
 * @param {*} params 
 */
bookModel.save = async (params) => {
    const bookM = new model(params);
    return await bookM.save(params);
}
/**
 * 更新章节信息
 * @param {} params 
 */
bookModel.updateChapter = async (params)=>{
    return await model.update({id: params.id},{chapters:params.chapters});
}
module.exports = bookModel;