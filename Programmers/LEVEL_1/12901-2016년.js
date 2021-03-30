/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12901
*
* COMMENT:
* a-1월까지의 총 일수와 b를 더해 a월 b일까지의 모든 일 수를 구한다
* 총 일수에서 7을 나누어서 요일을 구한다
**/

function solution(a, b) {
    const DAY = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    const MONTHS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // a월 b일까지의 일 수 구하기
    let days = b;
    if (a !== 1) {
        days += MONTHS.slice(0, a-1).reduce((sum, num) => sum+num);
    }
        
    return DAY[days % 7];
}