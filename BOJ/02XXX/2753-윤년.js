/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2753
*
* COMMENT:
* 윤년인 조건은 4의 배수인데 100의 배수가 아니거나 4의 배수인데 400의 배수여야 한다
* 이 조건을 if문에서 사용하면 된다
**/

const fs = require('fs');
let year = parseInt(fs.readFileSync('/dev/stdin').toString());

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(1);
} else {
    console.log(0);
}