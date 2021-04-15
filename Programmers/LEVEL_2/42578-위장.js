/**
* ABOUT
*
* DATE: 2021-04-15
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42578
*
* COMMENT:
* [ 해시 ]
* 의상의 종류별로 각각 옷이 몇개 있는지 구한다음에
* 모든 경우의 수를 구한다(경우의 수 곱의 법칙)
* 마지막에 -1을 하는 이유는 1가지 경우는 모든 옷을 안입을 때이므로 문제의 조건에 맞지않아 제외하는 것이다
**/

function solution(clothes) {
    // 의상의 종류별 옷이 각각 몇개 있는지 정리
    let closet = {};
    clothes.forEach(cloth => {
        if (closet[cloth[1]] === undefined) {
            closet[cloth[1]] = 2;
        } else {
            closet[cloth[1]] += 1;
        }
    });
    
    // 옷을 입을 수 있는 경우의 수 구하기
    let answer = Object.keys(closet).reduce((answer, kind) => {
        return answer * closet[kind];
    }, 1);
    
    return answer - 1;
}