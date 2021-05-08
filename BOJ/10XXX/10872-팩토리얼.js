/**
* ABOUT
*
* DATE: 2021-05-08
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10872
*
* COMMENT:
* 재귀를 사용하여 문제를 해결할 수 있다
* num = 0이 될 때까지 num! = num * (num-1)!을 반복한다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input= parseInt(line);
})
.on('close', function () {
    const Factorial = (num) => {
        if (num === 0) {
            return 1;
        }
        return num * Factorial(num-1);
    };
    
    let answer = Factorial(input);
    console.log(answer);
    
    process.exit();
});