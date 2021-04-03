/**
* ABOUT
*
* DATE: 2021-04-03
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/70128
*
* COMMENT:
* 문제에 나온 대로 내적을 구하는 코드를 작성하면 된다
**/

function solution(a, b) {
    var answer = 0;
    for (let idx = 0; idx < a.length; idx++) {
        answer += a[idx] * b[idx];
    }
    return answer;
}