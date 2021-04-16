'''/**
* ABOUT
*
* DATE: 2021-04-16
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/76501
*
* COMMENT:
* 각 숫자마다 sign을 확인해서 false이면 음수로 변경한다
* 그 후 모든 숫자들을 더해주면 된다
**/'''


def solution(absolutes, signs):
    answer = 0
    for idx, num in enumerate(absolutes):
        if signs[idx] == False:
            num *= -1
        answer += num
    return answer
