/**
* ABOUT
*
* DATE: 2021-04-28
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1157
*
* COMMENT:
* 대소문자를 구분하지 않으므로 단어를 모두 대문자로 변경하여 작업한다
* 단어의 문자를 하나씩 확인하면서 알파벳 갯수를 세어준다
* 그리고 각 알파벳의 갯수를 비교하며 가장 많이 사용된 알파벳을 찾는다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input += line.toUpperCase();
})
.on('close', function () {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let countChr = Array(ALPHABET.length).fill(0);
    let testcase = parseInt(input[0]);
    
    for (let idx = 0; idx < input.length; idx++) {
        countChr[ALPHABET.indexOf(input[idx])] += 1;
    }
    
    let maxCnt = 0;
    let maxNum = 0;
    let maxIdx = 0;
    countChr.forEach((el, idx) => {
        if (el > maxNum) {
            maxNum = el;
            maxIdx = idx;
            maxCnt = 1;
        } else if (el === maxNum) {
            maxCnt += 1;
        }
    });
    
    if (maxCnt === 1) {
        console.log(ALPHABET[maxIdx]);
    } else {
        console.log('?');
    }
    
    process.exit();
});