/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12903
*
* COMMENT:
* 단어의 길이가 짝수인지 홀수인지 판단
**/

function solution(s) {
    let len = s.length;
    let mid = parseInt(len / 2);
    
    if (len % 2 === 0) {
        // 단어의 길이가 짝수일 때
        return s[mid-1] + s[mid];
    }
    else {
        // 단어의 길이가 홀수일 때
        return s[mid];
    }
}