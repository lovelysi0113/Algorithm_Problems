/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12922
*
* COMMENT:
* n/2 개수만큼 "수박"을 추가한다
* n이 홀수라면 맨 끝에 "수"를 추가한다
**/

function solution(n) {
    var answer = '';
    
    for (let num = 0; num < parseInt(n / 2); num++) {
        answer += "수박";
    }
    if (n % 2 === 1) {
        answer += "수";
    }
    
    return answer;
}