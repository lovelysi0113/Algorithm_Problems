'''/**
* ABOUT
*
* DATE: 2021-04-08
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42889
*
* COMMENT:
* 각 스테이지에 몇명의 유저가 있는지 구한다음 문제에 나온 공식대로 실패율을 구한다
* 실패율이 높은 스테이지 순서대로 정렬하면 된다
**/'''

from collections import Counter


def solution(N, stages):
    # 각 스테이지마다 몇명의 사용자가 있는지 저장
    counter = Counter(list(stages))

    # 각 스테이지의 실패율을 구하기
    failure = {}
    clear_user = len(stages)
    for stage in range(1, N+1):
        if (counter[stage] == 0):
            failure[stage] = 0
        else:
            failure[stage] = counter[stage] / clear_user
            clear_user -= counter[stage]

    # 실패율 높은 순서대로 정렬하기
    return sorted(failure, key=lambda x: failure[x], reverse=True)
