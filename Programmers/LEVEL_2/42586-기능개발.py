'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42586
*
* COMMENT:
* [ 스택 / 큐 ]
* 큐를 사용하여 한번에 배포 가능한 것들을 꺼낸다
**/'''

import math

def solution(progresses, speeds):
    days = [math.ceil((100-progresses[idx]) / speeds[idx]) for idx in range(len(progresses))]
    
    answer = []
    while days:
        out = days.pop(0)
        cnt = 1
        while days and days[0] <= out:
            days.pop(0)
            cnt += 1
        answer.append(cnt)
        
    return answer