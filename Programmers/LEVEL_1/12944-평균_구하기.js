/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12944
*
* COMMENT:
* 배열의 모든 요소들의 합을 구하기 위해 reduce() 메서드를 사용했다
**/

function solution(arr) {
    return arr.reduce((sum, num) => sum + num) / arr.length;
}