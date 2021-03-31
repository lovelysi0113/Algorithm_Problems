/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12947
*
* COMMENT:
* 10으로 나눈 나머지로 자릿수를 구할 수 있다
**/

function solution(x) {
    let numX = x;
    let sumX = 0;
    
    // 자리수 합 구하기
    while (x > 0) {
        sumX += x % 10;
        x = parseInt(x / 10);
    }

    return numX % sumX === 0;
}