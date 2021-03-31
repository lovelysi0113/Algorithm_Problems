'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12931
*
* COMMENT:
* 10으로 나눈 나머지로 각 자릿수를 구할 수 있다
**/'''

def solution(n):
    answer = 0

    while n > 0:
        answer += n % 10
        n = n // 10

    return answer