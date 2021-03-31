'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12913
*
* COMMENT:
* memorization + 완전탐색으로 현재 라인에서 얻을 수 있는 최대 점수를 저장한다
**/'''

def solution(land):
    for step in range(1, len(land)):
        for idx in range(4):
            land[step][idx] += max(land[step-1][:idx] + land[step-1][idx+1:])
    return max(land[-1])