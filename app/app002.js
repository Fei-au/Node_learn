// const chalk = require('chalk');  // 使用这个的话，转换成import，并且在package.json中加入type:module
import ProgressBar from 'progress'

// console.log(chalk.yellow('你好'))
const bar = new ProgressBar(':bar', {total: 20});
const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
}, 100);
bar.tick();