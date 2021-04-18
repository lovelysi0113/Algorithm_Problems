/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/9498
*
* COMMENT:
* 점수에 따라 알맞은 알파벳을 출력해주면 된다
**/

const fs = require('fs');
let score = parseInt(fs.readFileSync('/dev/stdin').toString());

if (score >= 90 && score <= 100) {
    console.log('A');
} else if (score >= 80 && score <= 89) {
    console.log('B');
} else if (score >= 70 && score <= 79) {
    console.log('C');
} else if (score >= 60 && score <= 69) {
    console.log('D');
} else {
    console.log('F');
}