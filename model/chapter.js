/**
 * 数据模型
 * 书本信息
 */

const mongoose = require('../dataHelp/mongoose');
const logger = require('../config/log4');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    bookId: String,//书id
    chapterId:String,//章节id
    chapterOrder:String,//章节顺序
    chapterTxt: String,//章节文本
    wordNum: Number,//章节字数
    updateTime: String,//更新时间
})

const model = mongoose.model('chapter', bookSchema);

const chapterModel = {};
/**
 * 保存书本信息
 * @param {*} params 
 */
chapterModel.save = async (params) => {
    const chapterM = new model(params);
    logger.info(`保存章节信息----${params.chapterName}------`)
    return await chapterM.save(params);
}
module.exports = chapterModel;