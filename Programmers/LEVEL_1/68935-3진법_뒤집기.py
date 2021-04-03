'''/**
* ABOUT
*
* DATE: 2021-04-03
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/68935
*
* COMMENT:
* n % 3으로 3진법을 구한다
* 각 자릿수에 3의 거듭제곱을 곱해 10진법을 구한다
**/'''


def solution(n):
    # n -> 3진법 + 앞뒤로 뒤집기
    ternary = []
    while n > 0:
        ternary.append(n % 3)
        n = n // 3

    # 3진법 -> 10진법
    decimal = 0
    base = 1
    while ternary:
        now = ternary.pop()
        decimal += now * base
        base *= 3
    return decimal
