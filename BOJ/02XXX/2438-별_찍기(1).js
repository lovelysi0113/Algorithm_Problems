/**
* ABOUT
*
* DATE: 2021-04-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2438
*
* COMMENT:
* 별의 갯수를 주어지는 입력값 수까지 갯수를 늘려가며 출력해주면 된다
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
    
    for (let idx = 0; idx < input; idx++) {
        star += '*';
        console.log(star);
    }
    
    process.exit();
});