/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2739
*
* COMMENT:
* for문을 사용하여 1~9까지 출력해주면 된다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = parseInt(line);
})
.on('close', function () {
    for (let num = 1; num < 10; num++) {
        console.log(`${input} * ${num} = ${input * num}`);
    }
    
    process.exit();
});