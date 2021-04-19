/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2742
*
* COMMENT:
* for문을 사용해서 input 수~1까지 차례대로 출력하면 된다
* 이때, 시간을 줄이기위해 출력할 답을 문자열로 저장한 뒤 한꺼번에 출력하는 편이 빠르다
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
    answer = '';
    for (let num = 0; num < input; num++) {
        answer += `${input - num}\n`;
    }
    
    console.log(answer);
    
    process.exit();
});