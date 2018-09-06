/**
 * 获取所有的章节页
 */
const bookModel = require('../model/bookModel');
const chapterModel = require('../model/chapterModel');
const superagent = require('superagent');
const cheerio = require('cheerio');
const logger = require('../config/log4');
/**
 * 获取章节
 */
const getChapter = async ()=>{
    const data = await bookModel.getFirstAndRemove();
    if(data){
        //根据id获取页面信息
        superagent.get(`http://book.zongheng.com/showchapter/${data.id}.html`)
            .end((err,res)=>{
                if(err)
                    throw err;
                const $ = cheerio.load(res.text);
                const chapters = [];
                $(".chapterBean").each((index, item) => {
                    chapters.push({
                        chaptername: item.attribs.chaptername,
                        chapterid: item.attribs.chapterid,
                        wordnum: item.attribs.wordnum
                    })
                })
                const params = {
                    name: data.name,
                    id: data.id,
                    chapters: chapters
                }
                chapterModel.save(params)
            })
        getChapter();
    }else {
        logger.info('全部章节保存成功');
        getDetails()
    }
}

module.exports = {
    getChapter
}