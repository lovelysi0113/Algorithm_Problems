/**
* ABOUT
*
* DATE: 2021-05-23
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10828
*
* COMMENT:
* 문제에 주어진 명령에 맞게 코드를 작성하면 된다
* push X: 정수 X를 스택에 넣는 연산이다
* pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다
* size: 스택에 들어있는 정수의 개수를 출력한다
* empty: 스택이 비어있으면 1, 아니면 0을 출력한다
* top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다
* 그리고 시간을 줄이기 위해 답을 배열로 저장한 후 한번에 출력하였다
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
    let stack = [];
    let answer = [];
    input.forEach(command => {
        command = command.split(' ');
        if (command[0] === 'push') {
            stack.push(parseInt(command[1]));
        }
        else if (command[0] === 'pop') {
            if (stack.length === 0) {
                answer.push(-1);
            } else {
                let result = stack.pop();
                answer.push(result);
            }
        }
        else if (command[0] === 'size') {
            answer.push(stack.length);
        }
        else if (command[0] === 'empty') {
            if (stack.length === 0) {
                answer.push(1);
            } else {
                answer.push(0);
            }
        }
        else if (command[0] === 'top') {
            if (stack.length === 0) {
                answer.push(-1);
            } else {
                answer.push(stack[stack.length-1]);
            }
        }
    });
    console.log(answer.join('\n'));
    
    process.exit();
});