/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/8958
*
* COMMENT:
* 주어진 OX퀴즈 결과에서 하나씩 보면서 연속된 O의 갯수만큼 점수에 추가해준다
* 만약 X가 나오면 연속된 O의 갯수를 0으로 초기화해준다
* 점수가 단순히 연속된 O의 갯수를 더해주는 것이 아닌 O이 연속되면 연속된 갯수만큼 점수에 계속 추가되는 것이므로
* 점수 계산할 때 실수하면 안된다(이런 실수는 다음에는 하지 않도록 문제를 잘읽자!)
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
    let testcase = parseInt(input[0]);
    
    for (let test = 1; test <= testcase; test++) {
        let total = input[test].split('');
        
        let score = 0;
        let chkRight = 0;
        total.forEach(el => {
            if (el === 'O') {
                chkRight += 1;
                score += chkRight;
            }
            if (el === 'X') {
                chkRight = 0;
            }
        });
        
        console.log(score);
    }
    
    process.exit();
});