/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12916
*
* COMMENT:
* 문자열 s에서 for문을 사용하여 p, y 개수를 센다 
**/

function solution(s){
    let numP = 0;
    let numY = 0;

    for (let idx = 0; idx < s.length; idx++) {
        let ch = s[idx];
        if (ch === 'p' || ch === 'P') {
            numP++;
        }
        if (ch === 'y' || ch === 'Y') {
            numY++;
        }
    }

    return numP === numY;
}