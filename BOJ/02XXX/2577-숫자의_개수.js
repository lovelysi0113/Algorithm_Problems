/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2577
*
* COMMENT:
* 우선 0~9까지의 숫자의 갯수를 담는 배열(count)를 하나 만든다
* a, b, c의 곱의 각 자릿수의 숫자에 따라 해당 숫자의 갯수를 1 늘려준다
* 그리고 각 숫자가 몇개 있는지 하나씩 출력해주면 된다
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
    let total = input.map(el => parseInt(el)).reduce((total, sum) => total * sum, 1);
    
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (total > 0) {
        count[total % 10] += 1;
        total = parseInt(total / 10);
    }
    
    count.forEach(cnt => console.log(cnt));
    
    process.exit();
});