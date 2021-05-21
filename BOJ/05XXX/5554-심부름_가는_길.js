/**
* ABOUT
*
* DATE: 2021-05-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/5554
*
* COMMENT:
* 이동시간을 모두 더한 결과값은 초단위이므로
* 결과값을 60으로 나누면 몫이 분, 나머지가 초가 된다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
})
.on('close', function () {
    let seconds = input.reduce((sum, num) => {
        return sum + num
    }, 0);
    
    console.log(parseInt(seconds / 60));
    console.log(parseInt(seconds % 60));
    
    process.exit();
});