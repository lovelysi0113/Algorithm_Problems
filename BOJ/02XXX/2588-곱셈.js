/**
* ABOUT
*
* DATE: 2021-04-17
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2588
*
* COMMENT:
* 입력값 가져오는 방법 기억하기
* 이 문제는 다른 문제와 다르게 입력값이 공백을 기준으로 주는게 아니라
* 한줄씩 주기 때문에 입력값을 다르게 가져와야 한다
**/

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let b = input[1];

console.log(a * parseInt(b[2]));
console.log(a * parseInt(b[1]));
console.log(a * parseInt(b[0]));
console.log(a * parseInt(b));