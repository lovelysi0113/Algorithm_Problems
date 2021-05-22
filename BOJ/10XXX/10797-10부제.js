/**
* ABOUT
*
* DATE: 2021-05-22
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10797
*
* COMMENT:
* 주어진 날짜와 같은 일의 자리의 갯수를 세면 된다
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
    let today = parseInt(input[0]);
    let cars = input[1].split(' ').map(el => parseInt(el));
    
    let answer = cars.filter(el => el === today).length;
    console.log(answer);
    
    process.exit();
});