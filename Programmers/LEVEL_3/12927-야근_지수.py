'''/**
* ABOUT
*
* DATE: 2021-04-05
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12927
*
* COMMENT:
* 일할 때 가장 많이 남은 작업을 먼저 해준다
* heap을 사용하여 첫번째 위치의 수(작업량 * -1을 해줌으로써 가장 많이 남은 작업이 맨 위에 오게 된다)를 작업해주면 된다
* 야근 시간을 다 쓰기 전에 일이 모두 끝나는 경우도 고려해봐야 한다
**/'''

import heapq


def solution(n, works):
    works = [work * -1 for work in works]
    heapq.heapify(works)

    while n > 0:
        if works[0] == 0:
            return 0
        else:
            now_work = heapq.heappop(works) + 1
            heapq.heappush(works, now_work)
            n -= 1

    answer = sum([work * work for work in works])
    return answer
