/**
* ABOUT
*
* DATE: 2021-04-05
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12934
*
* COMMENT:
* Math.sqrt() 함수를 사용한다
**/

function solution(n) {
    let chk = Math.sqrt(n);
    if (chk === parseInt(chk)) {
        return (chk+1) * (chk+1);
    }
    else {
        return -1;
    }
}