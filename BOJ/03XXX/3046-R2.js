/**
* ABOUT
*
* DATE: 2021-05-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/3046
*
* COMMENT:
* 두 숫자 R1과 R2가 있을 때, 두 수의 평균 S는 (R1+R2)/2와 같다
* 따라서 R2를 구하려면 (S*2)-R1을 하면 된다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(el => parseInt(el));
})
.on('close', function () {
    let R1 = input[0];
    let S = input[1];
    let R2 = S * 2 - R1;
    
    console.log(R2);
    
    process.exit();
});