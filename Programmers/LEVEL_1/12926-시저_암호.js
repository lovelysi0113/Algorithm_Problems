/**
* ABOUT
*
* DATE: 2021-04-05
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12926
*
* COMMENT:
* 현재 문자열의 위치에서 n만큼 이동하여 새로운 문자열을 구한다
**/

function solution(s, n) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    
    var answer = '';
    for (let idx = 0; idx < s.length; idx++) {
        if (s[idx] === ' ') {
            answer += s[idx];
            continue;
        }
        let chgStr = s[idx].toLowerCase();
        let chkCase = s[idx] !== chgStr;
        let nowIdx = ALPHABET.indexOf(chgStr);
        chgStr = ALPHABET[(nowIdx + n) % 26];
        if (chkCase) {
            chgStr = chgStr.toUpperCase();
        }
        answer += chgStr;
    }
    
    return answer;
}