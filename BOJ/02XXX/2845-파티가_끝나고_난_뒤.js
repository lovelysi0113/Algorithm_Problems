/**
* ABOUT
*
* DATE: 2021-05-24
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2845
*
* COMMENT:
* 1m2당 사람의 수 L와 파티가 열렸던 곳의 넓이 P로 총 참가자 수를 구할 수 있다(L * P)
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(el => parseInt(el)));
})
.on('close', function () {
    const [ people, area ] = input[0];
    const total = people * area;
    const differ = input[1].map(num => num - total);
    console.log(differ.join(' '));
    
    process.exit();
});