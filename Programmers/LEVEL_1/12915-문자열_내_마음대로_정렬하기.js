/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12915
*
* COMMENT:
* n번째 인덱스를 비교하고 만약 같으면 전체 문자열을 비교하여 정렬한다
**/

function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return order(a, b);
        } else {
            return order(a[n], b[n]);
        }
    });
}

function order(a, b) {
    if (a < b) return -1;
    if (a === b) return 0;
    if (a > b) return 1;
}