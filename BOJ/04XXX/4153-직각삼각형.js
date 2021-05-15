/**
* ABOUT
*
* DATE: 2021-05-15
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/4153
*
* COMMENT:
* 피타고라스의 정리를 이용하여 주어진 삼각형이 직각삼각형인지 판단할 수 있다
* 피타고라스의 정리 - 가장 긴변의 제곱 = 나머지 두 변의 제곱의 합
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
        let triangle = input[idx].split(' ').map(el => parseInt(el));
        triangle.sort((a, b) => {
            if (a > b) return 1;
            else if (a === b) return 0;
            else return -1;
        });
        let [ a, b, c ] = triangle;
        if (a*a + b*b === c*c) {
            // 직각 삼각형이 맞으면 right 출력 
            console.log("right");
        } else {
            // 직각 삼각형이 아니면 wrong 출력
            console.log("wrong");
        }
    }

    process.exit();
});