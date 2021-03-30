'''/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12912
*
* COMMENT:
* for문을 사용하여 a와 b 사이의 모든 정수들을 더한다
**/'''

def solution(a, b):
    answer = 0
    if a == b:
        return a
    for num in range(min(a, b), max(a, b)+1):
        answer += num
    return answer