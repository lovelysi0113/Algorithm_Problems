/**
* ABOUT
*
* DATE: 2021-05-22
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10707
*
* COMMENT:
* 문제에서 주어진대로 X사와 Y사의 수도요금을 계산한 후 더 싼 요금을 찾으면 된다
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
    let [ A, B, C, D, P ] = input;
    let X = A * P;
    let Y = P <= C ? B : B + (P-C) * D;
    
    console.log(X <= Y ? X : Y);
    
    process.exit();
});