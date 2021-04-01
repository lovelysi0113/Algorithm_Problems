/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12917
*
* COMMENT:
* 대문자, 소문자를 분리하고 내림차순 정렬을 한 후 다시 합쳤다
**/

function solution(s) {
    let arrLower = [];
    let arrUpper = [];
    
    s.split('').forEach(ch => {
        if (ch === ch.toLowerCase()) {
            arrLower.push(ch);
        } else {
            arrUpper.push(ch);
        }
    });
    
    const order = (a, b) => {
        if (a > b) return -1;
        if(a === b) return 0;
        if (a < b) return 1;
    };
    arrLower.sort((a,b) => order(a, b));
    arrUpper.sort((a,b) => order(a, b));
    
    return arrLower.concat(arrUpper).join('');
}