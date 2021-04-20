/**
* ABOUT
*
* DATE: 2021-04-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11021
*
* COMMENT:
* 문제에서 요구하는 출력 형식에 맞춰서 a + b의 값을 출력해주면 된다
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
    
    for (let test = 1; test <= testcase; test++) {
        let [ a, b ] = input[test].split(' ').map(el => parseInt(el));
        console.log(`Case #${test}: ${a + b}`);
    }
    
    process.exit();
});