/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10951
*
* COMMENT:
* a, b의 입력값이 끝날 때까지 while문으로 반복 작업한다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
})
.on('close', function () {
    input.forEach(testcase => {
        let [ a, b ] = testcase.split(' ').map(el => parseInt(el));
        console.log(a + b);
    });
    
    process.exit();
});