/**
* ABOUT
*
* DATE: 2021-05-13
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/5086
*
* COMMENT:
* 두 수 중 큰 수에서 작은 수를 나누어 나머지가 0이면 배수/약수이다
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
    for (let idx = 0; idx < input.length-1; idx++) {
        let [ a, b ] = input[idx].split(' ').map(el => parseInt(el));
        if (a > b) {
            if (a % b === 0) {
                // 첫 번째 숫자가 두 번째 숫자의 배수라면 multiple 출력
                console.log('multiple');
            } else {
                // 둘 다 아니라면 neither 출력
                console.log('neither');
            }
        } else {
            if (b % a === 0) {
                // 첫 번째 숫자가 두 번째 숫자의 약수라면 factor 출력
                console.log('factor');
            } else {
                // 둘 다 아니라면 neither 출력
                console.log('neither');
            }
        }
    }

    process.exit();
});