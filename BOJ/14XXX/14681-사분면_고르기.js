/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/14681
*
* COMMENT:
* node.js에서 입력값을 가져오기위해 readline을 사용해야 한다
* 입력값 가져오는 방법 꼭 기억하기!
* x, y의 기호(양수/음수)를 판단하여 주어진 점이 어느 사분면에 속하는지 알 수 있다
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
    let [ x, y ] = input;
    if (x > 0 && y > 0) {
        console.log(1);
    } else if (x < 0 && y > 0) {
        console.log(2);
    } else if (x < 0 && y < 0) {
        console.log(3);
    } else {
        console.log(4);
    }
    
    process.exit();
});