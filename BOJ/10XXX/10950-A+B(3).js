/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10950
*
* COMMENT:
* 첫번째 인자로 받은 수만큼 for문을 사용하여 반복작업하면 된다
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
    
    for (let idx = 1; idx <= testcase; idx++) {
        let [ a, b ] = input[idx].split(' ').map(el => parseInt(el));
        console.log(a + b);
    }
    
    process.exit();
});