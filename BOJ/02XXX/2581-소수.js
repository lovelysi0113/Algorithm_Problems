/**
* ABOUT
*
* DATE: 2021-05-09
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2581
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
    
    let num1 = parseInt(input[0]);
    let num2 = parseInt(input[1]);
    
    let answer = 0;
    let minPrime = 0;
    for (let chk = num1; chk <= num2; chk++) {
        if (isPrime(chk)) {
            if (answer === 0) {
                minPrime = chk;
            }
            answer += chk;
        }
    }

    if (answer === 0) {
        console.log(-1);
    } else {
        console.log(answer);
        console.log(minPrime)
    }
    
    process.exit();
});