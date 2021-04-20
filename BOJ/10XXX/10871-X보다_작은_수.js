/**
* ABOUT
*
* DATE: 2021-04-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10871
*
* COMMENT:
* 주어지는 입력값 포맷대로 값들을 저장한 후 for문으로 비교하며 x보다 작은 수들만 출력해주면 된다
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
    let [ num, main ] = input[0].split(' ').map(el => parseInt(el));
    let chkNums = input[1].split(' ').map(el => parseInt(el));
    
    let answer = [];
    for (let idx = 0; idx < num; idx++) {
        let chk = parseInt(chkNums[idx]);
        if ( chk < main) {
            answer.push(chk);
        }
    }
    
    console.log(answer.join(' '));
    
    process.exit();
});