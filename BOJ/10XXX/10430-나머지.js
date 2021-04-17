/**
* ABOUT
*
* DATE: 2021-04-17
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10430
*
* COMMENT:
* 입력값 가져오는 방법 기억하기
**/

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);