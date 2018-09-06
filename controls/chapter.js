/**
 * 获取所有的章节页
 */
const bookModel = require('../model/bookModel');
const chapterModel = require('../model/chapterModel');
const book = require('../model/book');
const superagent = require('superagent');
const cheerio = require('cheerio');
const logger = require('../config/log4');
const { getBookDetail } = require('../controls/detail');
/**
 * 获取章节
 */
const getChapter = async ()=>{
    // const data = await bookModel.getFirstAndRemove();
    // if(data){
    //     //根据id获取页面信息
    //     superagent.get(`http://book.zongheng.com/showchapter/${data.id}.html`)
    //         .end((err,res)=>{
    //             if(err)
    //                 throw err;
    //             const $ = cheerio.load(res.text);
    //             const chapters = [];
    //             $(".chapterBean").each((index, item) => {
    //                 chapters.push({
    //                     chapterName: item.attribs.chaptername,
    //                     chapterId: item.attribs.chapterid,
    //                     wordNum: item.attribs.wordnum,
    //                     updateTime: item.attribs.updatetime
    //                 })
    //             })
    //             const params = {
    //                 name: data.name,
    //                 id: data.id,
    //                 chapters: chapters
    //             }
    //             chapterModel.save(params);
    //             book.updateChapter(params)
    //         })
    //     getChapter();
    // }else {
    //     logger.info('全部章节保存成功');
        getBookDetail()
    // } 
}

module.exports = {
    getChapter
}