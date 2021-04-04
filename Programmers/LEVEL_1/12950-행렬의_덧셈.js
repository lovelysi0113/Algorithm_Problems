/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12950
*
* COMMENT:
* 문제에 나온대로 같은 행, 같은 열의 값을 더해주면 된다
**/

function solution(arr1, arr2) {
    let matrix = arr1.map((line, idx) => {
        return line.map((num, col) => num + arr2[idx][col]);
    });
    return matrix;
}