/**
* ABOUT
*
* DATE: 2021-05-26
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1874
*
* COMMENT:
* 이 문제의 핵심은 1~n까지 stack에 넣고 빼는 작업을 반복하면서 주어진 수열을 만들 수 있느냐이다
* 수열의 현재 숫자를 num, stack에 담긴 수 중 가장 높은 수를 lastNum이라고 할 때
* 1. 만약 lastNum이 num보다 작으면 num이 나올때까지 숫자를 stack에 담는다(push, '+')
* 2. stack의 맨 위 숫자가 num이면 stack에서 빼낸다(pop, '-')
* 3. 만약 stack의 맨 위 숫자가 num보다 크면 숫자를 빼내도 원하는 수열을 만들 수 없으므로 불가능이 된다('NO')
* 이 과정을 반복하여 주어진 수열을 만들 수 있는지 계산할 수 있다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
})
.on('close', function () {
    let stack = [];
    let lastNum = 0;
    let answer = [];
    let isRight = true;
    for (let idx = 1; idx < input.length; idx++) {
        while (lastNum < input[idx]) {
            lastNum += 1;
            stack.push(lastNum);
            answer.push('+');
        }
        if (stack[stack.length-1] === input[idx]) {
            stack.pop();
            answer.push('-');
        } else {
            isRight = false;
            break;
        }
    }
    
    if (isRight) {
        console.log(answer.join('\n'));
    } else {
        console.log('NO');
    }
    
    process.exit();
});