/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12912
*
* COMMENT:
* for문을 사용하여 a와 b 사이의 모든 정수들을 더한다
**/

function solution(a, b) {
    var answer = 0;
    
    // a, b 정렬
    if (a > b) {
        [ a, b ] = [ b, a ];
    }
    
    // 모든 정수의 합 구하기
    for (let num = a; num <= b; num++) {
        answer += num;
    }
    
    return answer;
}