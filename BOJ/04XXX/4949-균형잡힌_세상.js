/**
* ABOUT
*
* DATE: 2021-05-26
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/4949
*
* COMMENT:
* 문자열에서 괄호들을 검사하며 괄호들이 균형이 잘 맞춰져 있는지(짝이 맞는지) 확인한다
* 현재 문자가 '('나 '['이면 bracket에 넣는다(push)
* 현재 문자가 ')'나 ']'이면 bracket에서 빼고(pop) 짝이 맞는지 확인한다
* 만약 검사하는 도중에 짝이 맞지 않거나 검사가 끝난 후 bracket에 남아있다면 이 문자열은 균형잡힌 문자열이 아니다
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
    input.slice(0, input.length-1).forEach(str => {
        let bracket = [];
        let isCorrect = true;
        for (let idx = 0; idx < str.length; idx++) {
            if (str[idx] === '(' || str[idx] === '[') {
                bracket.push(str[idx]);
            } else if (str[idx] === ')') {
                if (bracket.pop() !== '(') {
                    isCorrect = false;
                    break;
                }
            } else if (str[idx] === ']') {
                if (bracket.pop() !== '[') {
                    isCorrect = false;
                    break;
                }
            }
        }

        if (bracket.length > 0 || !isCorrect) {
            console.log('no');
        } else {
            console.log('yes');
        }
    });
    
    process.exit();
});