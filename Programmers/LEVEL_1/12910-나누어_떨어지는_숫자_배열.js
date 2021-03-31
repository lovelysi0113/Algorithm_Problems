/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12910
*
* COMMENT:
* filter() 메서드를 사용하여 divisor로 나누어 떨어지는 값들이 있는 배열을 구한다
**/

function solution(arr, divisor) {
    var answer = arr.filter(num => num % divisor === 0);
    answer.sort((a, b) => a-b);
    
    if (answer.length === 0) {
        return [-1];
    }
    return answer;
}