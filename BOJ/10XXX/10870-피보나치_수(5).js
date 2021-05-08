/**
* ABOUT
*
* DATE: 2021-05-08
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10870
*
* COMMENT:
* 재귀를 사용하여 문제를 해결할 수 있다
* num = 0, 1이 될 때까지 Fibo(num) = Fibo(num-1) + Fibo(num-2)!을 반복한다
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
    const Fibonacci = (num) => {
        if (num <= 1) {
            return num;
        }
        return Fibonacci(num-1) + Fibonacci(num-2);
    };
    
    let answer = Fibonacci(input);
    console.log(answer);
    
    process.exit();
});