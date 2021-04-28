/**
* ABOUT
*
* DATE: 2021-04-28
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2675
*
* COMMENT:
* 문자열 하나씩 주어진 수만큼 반복하여 결과값을 저장하는 문자열에 추가해주면 된다
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
    
    for(let test = 1; test <= testcase; test++) {
        let repeat = parseInt(input[test].split(' ')[0]);
        let string = input[test].split(' ')[1].split('');
        
        let result = '';
        for (let idx = 0; idx < string.length; idx++) {
            for (let num = 0; num < repeat; num++) {
                result += string[idx];
            }
        }
        console.log(result);
    }
    
    process.exit();
});