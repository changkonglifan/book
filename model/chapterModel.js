/**
 * 章节数据模型
 */
const mongoose = require('../dataHelp/mongoose');
const logger = require('../config/log4');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    id: String,//书id
    name: String,//书名
    chapters: Array,//章节 章节名 章节id 章节字数
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
/**
 * 获取一本书
 * 删除这本书信息
 */
chapter.getOneBook = async () => {
    const data = await model.findOne();
    if(data){
        await model.deleteMany({id: data.id})//删除这本书的信息
    }
    return data;
}
module.exports = chapter;