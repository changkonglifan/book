/**
 * 获取所有的书列表
 */
const superagent = require('superagent');
const { website} = require('../config');
const bookModel = require('../model/bookModel');
const { getChapter } = require('../controls/chapter');
const cheerio = require('cheerio');
const logger = require('../config/log4');
/**
 * 获取所有的书本列表
 */
const getAllBooks = (page,total) => {
    // let len = 0;
    // if(page <= total){
    //     superagent
    //         .get(`${website.baseurl}/quanben/c0/c0/b9/u1/p${page}/v0/s1/t0/ALL.html`)
    //         .end((err,res)=>{
    //             if(err)
    //                 throw err;
    //             const $ = cheerio.load(res.text);
    //             len = $('.pagenumber')[0].attribs.count;//最大页数
    //             if(saveAllBooks($)){
    //                 //执行完成
    //                 getAllBooks(page + 1, len);
    //                 logger.info(`第${page}页完成`)
    //             }
    //         })
    // }else{
        //存储完成
        getChapter();
    // }
}
/**
 * 解析获取的页面数据
 * @param {*} $ 
 */
const saveAllBooks = ($) => {
    const list = $(".chap .fs14");
    list.each((index,element) => {
        const modal = {
            name: element.attribs.title,
            id: element.attribs.href.split('/book/')[1].split('.')[0]
        }
        bookModel.save(modal);
    });
    logger.info('当前页保存完成');
    // bookModel.close();
    return true;
}
module.exports = {
    getAllBooks
}