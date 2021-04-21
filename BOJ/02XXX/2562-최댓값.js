/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2562
*
* COMMENT:
* 입력으로 받은 수들을 비교하여 최댓값을 구하고 이때 최댓값이 몇번째로 입력된 수인지도 함께 출력해준다
* 이때 idx에 1을 더해주는 이유는 배열의 index는 0부터 시작하기 때문이다
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
    input = input.map(el => parseInt(el));
    
    let maxIdx = input.reduce((max, num, idx) => {
        if (num > input[max]) {
            max = idx;
        }
        return max;
    }, 0);
    
    console.log(input[maxIdx]);
    console.log(maxIdx+1);
    
    process.exit();
});