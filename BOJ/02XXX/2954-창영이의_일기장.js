/**
 * ABOUT
 *
 * DATE: 2021-09-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2954
 *
 * COMMENT:
 * 알파벳 하나씩 검사하면서 모음이 나오면 p와 다음 모음을 없애주는 작업을 해준다.
 **/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    let answer = '';

    let idx = 0;
    while (idx < input.length) {
        answer += input[idx];
        if ('aeiou'.includes(input[idx])) {
            idx += 3;
        } else {
            idx += 1;
        }
    }

    console.log(answer);

    process.exit();
});
