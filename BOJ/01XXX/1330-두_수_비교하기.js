/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1330
*
* COMMENT:
* a, b 값을 비교하여 if문을 사용해 다르게 출력하면 된다
**/

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a > b) {
    console.log('>');
} else if (a === b) {
    console.log('==');
} else {
    console.log('<');
}