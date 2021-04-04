/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12945
*
* COMMENT:
* F(n) = F(n-1) + F(n-2)로 n번째 피보나치 수를 구했다
**/

function solution(n) {
    let fibo = new Array(n+1).fill(0);
    fibo[1] = 1;
    
    for (let idx = 2; idx <= n; idx++) {
        fibo[idx] = (fibo[idx-1] + fibo[idx-2]) % 1234567;
    }
    
    return fibo[n];
}