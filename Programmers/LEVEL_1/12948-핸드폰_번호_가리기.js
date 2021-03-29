/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12948
*
* COMMENT:
* slice를 사용하여 마지막 4자리만 가져오고
* 나머지 길이만큼 '*'를 채운다
**/

function solution(phone_number) {
    var answer = phone_number.slice(-4);
    
    let len = phone_number.length;
    for (let num = 0; num < len-4; num++) {
        answer = '*' + answer;
    }
    
    return answer;
}