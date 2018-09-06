/**
 * 章节数据模型
 */
const mongoose = require('../dataHelp/mongoose');
const logger = require('../config/log4');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    id: String,
    name: String,//书名
    chapters: Array,//书名id
})
const model = mongoose.model('chapterGet', chapterSchema);

const chapter = {};
/**
 * 保存章节
 * @param {*} params 
 */
chapter.save = async (params)=>{
    const chapters = new model(params);
    logger.info(`保存----${params.name}----成功`)
    return await chapters.save(params);
}

module.exports = chapter;