/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/8393
*
* COMMENT:
* for문을 사용하여 1~input 수까지 더해주면 된다
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
    let answer = 0;
    for (let num = 1; num <= input; num++) {
        answer += num;
    }
    
    console.log(answer);
    
    process.exit();
});