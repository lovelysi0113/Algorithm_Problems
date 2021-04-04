/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/62048
*
* COMMENT:
* 잘리는 부분의 최소 단위는 최대공약수만큼 반복된다
* 최소 단위에서 잘리는 사각형은 가로 길이+세로 길이-1개이다(1은 겹치는 부분을 빼준것)
* 최소 단위의 가로, 세로 길이는 처음 가로, 세로길이에서 최대공약수를 이용하여 구할 수 있다
**/

function solution(w, h) {
    let num = gcd(w, h);
    let minimum = w/num + h/num - 1;
    return w * h - minimum * num;
}

function gcd (a, b) {
    if (b === 0)
        return a;
    else
        return gcd(b, a % b);
}