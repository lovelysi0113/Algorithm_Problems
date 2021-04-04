/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12933
*
* COMMENT:
* 각 자릿수를 배열로 넣은 후 내림차순 정렬을 한다
**/

function solution(n) {
    let num = [];
    while (n > 0) {
        num.push(n % 10);
        n = parseInt(n / 10);
    }
    
    num.sort((a,b) => b-a);
    
    return Number(num.join(''));
}