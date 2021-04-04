/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12940
*
* COMMENT:
* 유클리드 호제법을 사용하여 최대공약수와 최소공배수를 구한다
**/

function solution(n, m) {
    let num = gcd(n, m);
    return [num, n/num * m/num * num];
}

function gcd(a, b) {
    if (b === 0)
        return a;
    else
        return gcd(b, a % b);
}