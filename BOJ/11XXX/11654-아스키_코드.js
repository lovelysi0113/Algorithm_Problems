/**
* ABOUT
*
* DATE: 2021-04-27
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11654
*
* COMMENT:
* charCodeAt() 메소드를 사용하여 주어진 글자의 아스키 코드값을 구할 수 있다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input += line;
})
.on('close', function () {
    console.log(input.charCodeAt());
    
    process.exit();
});