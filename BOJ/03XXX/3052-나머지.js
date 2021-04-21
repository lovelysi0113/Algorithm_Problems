/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/3052
*
* COMMENT:
* 입력받은 수들을 42로 나눈 나머지를 구한 다음 answer배열에 넣어준다
* 이때, 이미 들어간 수와 겹치지 않는 값들만 넣어준다
* 그리고 answer에 몇 개의 수가 들어가있는지 갯수를 세주면 된다
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
    input = input.map(num => parseInt(num) % 42);
    let answer = [];
    for (let idx = 0; idx < 10; idx++) {
        if (!answer.includes(input[idx])) {
            answer.push(input[idx]);
        }
    }
    
    console.log(answer.length);
    
    process.exit();
});