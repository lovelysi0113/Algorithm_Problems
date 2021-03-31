/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12935
*
* COMMENT:
* reduce() 메서드로 배열에서 가장 작은 수를 구할 수 있다
**/

function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }
    
    // 가장 작은 수 구하기
    let minNum = arr.reduce((min, num) => Math.min(min, num));
    let minIdx = arr.indexOf(minNum);
    
    arr.splice(minIdx, 1);
    return arr;
}