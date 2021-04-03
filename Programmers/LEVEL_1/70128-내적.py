'''/**
* ABOUT
*
* DATE: 2021-04-03
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/70128
*
* COMMENT:
* 문제에 나온 대로 내적을 구하는 코드를 작성하면 된다
**/'''


def solution(a, b):
    answer = 0
    for idx in range(0, len(a)):
        answer += a[idx] * b[idx]
    return answer
