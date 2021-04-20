/**
* ABOUT
*
* DATE: 2021-04-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2439
*
* COMMENT:
* 공백 갯수와 별의 갯수를 주어지는 입력값 수만큼 출력해주면 된다
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
    let star = '';
    let blank = '';
    for (let idx = 0; idx < input; idx++) {
        blank += ' ';
    }
    
    for (let idx = 0; idx < input; idx++) {
        star += '*';
        blank = blank.slice(1);
        console.log(blank + star);
    }
    
    process.exit();
});