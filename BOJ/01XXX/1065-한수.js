/**
* ABOUT
*
* DATE: 2021-04-26
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1065
*
* COMMENT:
* 문제에서 정의된 '한수'처럼 각 자리수가 등차수열인지 확인하는 함수 hansu()를 구현한다
* 그리고 1~input까지 모두 hansu()에 넣어서 그 숫자가 '한수'인지 확인한다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = parseInt(line);
    
})
.on('close', function () {
    const hansu = (num) => {
        if (num < 10) {
            return true;
        }
        let chk = [];
        while (num > 0) {
            chk.push(num % 10);
            num = parseInt(num / 10);
        }
        let differ = chk[0] - chk[1];
        for (let idx = 1; idx < chk.length-1; idx++) {
            if (chk[idx] - chk[idx+1] !== differ) {
                return false;
            }
        }
        return true;
    };
    
    let answer = 0;
    for (let num = 1; num <= input; num++) {
        if (hansu(num)) {
            answer += 1;
        }
    }
    
    console.log(answer);
    
    process.exit();
});