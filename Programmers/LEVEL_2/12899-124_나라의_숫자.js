/**
* ABOUT
*
* DATE: 2021-04-03
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12899
*
* COMMENT:
* 3진법처럼 바꾼 후 나온 숫자를 124 나라의 규칙대로 바꾸면 된다
* n = 3^k * (A) + 3^(k-1) * (A) + … + (A)로 표현 가능(이때 A는 1,2,3 중 하나)
**/

function solution(n) {
    let changeNum = [];
    let last = 0;
    while (n > 0) {
        last = n % 3 === 0 ? 3: n % 3;
        changeNum.push(last);
        n = (n - last) / 3;
    }
    
    let answer = '';
    while (changeNum.length > 0) {
        let now = changeNum.pop();
        if (now === 3) {
            now = 4;
        }
        answer += now;
    }
    return answer;
}