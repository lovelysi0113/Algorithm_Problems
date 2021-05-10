/**
* ABOUT
*
* DATE: 2021-05-10
* AUTHOR: lovelysi0113
*
* URL: https: // www.acmicpc.net/problem/1712
*
* COMMENT:
* 손익분기점(최초로 이익이 발생하는 판매량)은 고정 비용 + n대 생산하는데 드는 비용 < n대 판매한 비용을 만족할 때이다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input += line;
})
.on('close', function () {
    let [ fix, produce, price ] = input.split(' ').map(el => parseInt(el));
    
    if (produce >= price) {
        // 손익분기점이 존재하지 않음
        console.log(-1);
    }
    else {
        // 수익분기점: 고정비용 + 1대 만드는데 드는 비용 < 판매 비용
        let differ = price - produce;
        let answer = Math.floor(fix / differ) + 1;
        console.log(answer);
    }
    
    process.exit();
});