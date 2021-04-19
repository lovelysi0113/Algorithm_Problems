/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/15552
*
* COMMENT:
* javascript에서 console.log()는 느리기 때문에 여러번 console.log()를 하게되면 시간초과가 난다
* 시간을 줄이기위해 출력할 답을 문자열로 저장한 뒤 한꺼번에 출력하는 편이 빠르다
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
    let testcase = parseInt(input[0]);
    
    let answer = '';
    for (let idx = 1; idx <= testcase; idx++) {
        let [ a, b ] = input[idx].split(' ').map(el => parseInt(el));
        answer += `${a + b}\n`;
    }
    
    console.log(answer);
    
    process.exit();
});