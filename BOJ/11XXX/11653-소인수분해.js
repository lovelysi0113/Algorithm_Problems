/**
* ABOUT
*
* DATE: 2021-05-11
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11653
*
* COMMENT:
* 주어진 수가 num으로 나누어지면 num이 소인수라는 의미이다
* num = 2부터 시작하여 주어진 수가 1이 될때까지 반복한다(만약 num이 소인수가 아니라면 1 증가하여 반복)
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
    let answer = [];
    let num = 2;
    while (input > 1) {
        if (input % num === 0) {
            answer.push(num);
            input = input / num;
        } else {
            num += 1;
        }
    }
    
    console.log(answer.join('\n'));
    
    process.exit();
});