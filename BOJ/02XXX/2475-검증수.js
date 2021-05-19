/**
* ABOUT
*
* DATE: 2021-05-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2475
*
* COMMENT:
* 검증수는 고유번호의 처음 5자리에 들어가는 5개의 숫자를 각각 제곱한 수의 합을 10으로 나눈 나머지이다.
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
    let answer = input.reduce((sum, num) => {
        return sum + num * num
    }, 0);
    
    console.log(answer % 10);
    
    process.exit();
});