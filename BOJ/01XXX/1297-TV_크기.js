/**
* ABOUT
*
* DATE: 2021-05-27
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1297
*
* COMMENT:
* 피타고라스의 정리를 사용하여 대각선의 비율을 구할 수 있고 이를 토대로 실제 너비, 높이를 구할 수 있다
* 피타고라스 정리: 너비의 제곱 + 높이의 제곱 = 대각선의 제곱
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
    let [ diagonal, ratioWidth, ratioHeight ] = input;
    let ratioDiagonal = Math.sqrt(ratioWidth * ratioWidth + ratioHeight * ratioHeight);
    let ratioLen = diagonal / ratioDiagonal;
    
    let width = Math.floor(ratioLen * ratioWidth);
    let height = Math.floor(ratioLen * ratioHeight);
    
    console.log(width, height);
    
    process.exit();
});