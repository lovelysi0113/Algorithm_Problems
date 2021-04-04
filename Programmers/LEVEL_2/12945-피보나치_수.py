'''/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12945
*
* COMMENT:
* F(n) = F(n-1) + F(n-2)로 n번째 피보나치 수를 구했다
**/'''


def solution(n):
    if n == 1:
        return 1

    fibo = [0, 1] + [-1] * (n-1)
    for idx in range(2, n+1):
        fibo[idx] = fibo[idx-1] + fibo[idx-2]
    return fibo[n] % 1234567

# 재귀를 사용하면 런타임에러가 난다..!


def fibonacci(n, arr):
    if arr[n] == -1:
        arr[n] = fibonacci(n-1, arr) + fibonacci(n-2, arr)
    return arr[n]
