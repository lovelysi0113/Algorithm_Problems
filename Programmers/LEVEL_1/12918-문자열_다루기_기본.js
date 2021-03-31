/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12918
*
* COMMENT:
* 문자열 s를 number 타입으로 변환하여 NaN인지 확인한다
* 문자열에 'e'나 '.'가 있으면 number 타입으로 변환했을 때 숫자로 인식하므로 if문으로 있는지 확인하여 false를 리턴한다
**/

function solution(s) {
    let len = s.length;
    
    if (len !== 4 && len !== 6) {
        return false;
    }
    
    if (s.includes('e') || s.includes('.')) {
        return false;
    }

    return !isNaN(Number(s));
}