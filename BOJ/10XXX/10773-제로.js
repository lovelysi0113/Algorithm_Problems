/**
* ABOUT
*
* DATE: 2021-05-23
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10773
*
* COMMENT:
* 현재 수가 숫자면 stack에 넣고(push), 0이면 stack에서 뺀다(pop)
* 모든 작업이 끝난 후, stack에 남아있는 모든 수의 합을 구하면 된다
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
    let account = [];
    input.slice(1).forEach(num => {
        if (num === 0) {
            account.pop();
        } else {
            account.push(num);
        }
    });
    
    let answer = account.reduce((sum, num) => sum + num, 0);
    console.log(answer);
    
    process.exit();
});