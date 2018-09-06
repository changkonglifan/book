/**
 * 主文件
 */

const logger = require('./config/log4');
const { getAllBooks } = require('./controls/books')
/**
 * 主入口
 */
const start = async ()=>{
    logger.info('抓取所有的小说列表开始。。。');
    getAllBooks(0,0);
}

start();