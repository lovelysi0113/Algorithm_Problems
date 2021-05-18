/**
* ABOUT
*
* DATE: 2021-05-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2338
*
* COMMENT:
* JavaScript에서 큰 수를 다루기 위해서 BigInt()를 사용할 수 있다.
* 그리고 마지막에 합을 출력할 때 toString()을 사용하면 잘림없이 모두 출력 가능하다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(BigInt(line));
})
.on('close', function () {
    let a = input[0];
    let b = input[1];

    console.log((a + b).toString());
    console.log((a - b).toString());
    console.log((a * b).toString());

    process.exit();
});