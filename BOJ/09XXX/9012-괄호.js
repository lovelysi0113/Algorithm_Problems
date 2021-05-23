/**
* ABOUT
*
* DATE: 2021-05-23
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/9012
*
* COMMENT:
* 괄호 문자열을 하나씩 검사하며 올바른 괄호 문자열(괄호의 모양이 바르게 구성)인지 확인한다
* 현재 문자가 '('이면 bracket에 넣는다(push)
* 현재 문자가 ')'이면 bracket에서 뺀다(pop)
* 만약 검사하는 도중에 bracket이 비거나 검사가 끝난 후 bracket에 남아있다면 이 괄호 문자열은 올바른 괄호 문자열이 아니다
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
    input.slice(1).forEach(str => {
        let bracket = [];
        let isCorrect = true;
        for (let idx = 0; idx < str.length; idx++) {
            if (str[idx] === '(') {
                bracket.push(str[idx]);
            } 
            else if (str[idx] === ')') {
                if (bracket.length === 0) {
                    isCorrect = false;
                    break;
                } else {
                    bracket.pop();
                }
            }
        }
        if (bracket.length > 0) {
            isCorrect = false;
        }
        console.log(isCorrect ? 'YES' : 'NO');
    });
    
    process.exit();
});