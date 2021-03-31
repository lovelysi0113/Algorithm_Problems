/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12925
*
* COMMENT:
* 숫자로 변환하기 전 부호를 확인해야 한다
**/

function solution(s) {
    if (s[0] === '-') {
        return Number(s.slice(1)) * -1;
    }
    else {
        return Number(s);
    }
}