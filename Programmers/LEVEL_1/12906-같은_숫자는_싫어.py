'''/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12906
*
* COMMENT:
* 연속적으로 나타나지 않을 때만 정답 배열에 넣어준다
**/'''

def solution(arr):
    answer = []
    temp = -1
    for chk in arr:
        if temp != chk:
            temp = chk
            answer.append(temp)
    return answer