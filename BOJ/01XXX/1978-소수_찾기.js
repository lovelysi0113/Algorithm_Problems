/**
* ABOUT
*
* DATE: 2021-05-09
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1978
*
* COMMENT:
* 에라토스테네스의 체를 사용하여 해당 숫자가 소수인지 판별할 수 있다
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
    const isPrime = (num) => {
        if (num < 2) {
            return false;
        }
        if (num === 2) {
            return true;
        }
        for (let chk = 2; chk < Math.sqrt(num)+1; chk++) {
            if (num % chk === 0) {
                return false;
            }
        }
        return true;
    };
    
    let total = parseInt(input[0]);
    let numList = input[1].split(' ').map(el => parseInt(el));
    
    let answer = 0;
    numList.forEach(num => {
        if (isPrime(num)) {
            answer += 1;
        }
    });
    console.log(answer);
    
    process.exit();
});