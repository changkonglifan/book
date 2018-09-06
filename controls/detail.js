// 
/**
 * 获取详情保存
 */ 
const bookTmp = require('../model/chapterModel');
const chapterModel = require('../model/chapter');
const superagent = require('superagent');
const cheerio = require('cheerio');
const logger = require('../config/log4');

/**
 * 获取书本详情
 */
const getBookDetail = async () =>{
    var book = await bookTmp.getOneBook();//获取一本书
    if(book){
        book.chapters.forEach(element => {
            superagent
            .get(`http://book.zongheng.com/chapter/${book.id}/${element.chapterId}.html`)
            .end((err,res) =>{
                if(err)
                    throw err;
                const $ = cheerio.load(res.text);
                const params = {
                    bookId: book.id,
                    chpaterId: element.chapterId,
                    chapterName: element.chapterName,
                    wordNum: element.wordNum,
                    updateTime:element.updateTime,
                    chapterTxt: $('#readerFs').html()
                }
                chapterModel.save(params);
                logger.info('保存章节');
            })
        });
        logger.info('保存一本书')
    }else{
        getBookDetail();
    }
}
module.exports = {
    getBookDetail
}