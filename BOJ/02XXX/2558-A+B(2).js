/**
* ABOUT
*
* DATE: 2021-05-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2558
*
* COMMENT:
* 계산하기 전 String 타입을 Number(parseInt)로 변환하기
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
    let a = input[0];
    let b = input[1];
    
    console.log(a + b);
    
    process.exit();
});