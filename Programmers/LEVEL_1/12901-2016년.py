'''/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12901
*
* COMMENT:
* a-1월까지의 총 일수와 b를 더해 a월 b일까지의 모든 일 수를 구한다
* 총 일수에서 7을 나누어서 요일을 구한다
**/'''

def solution(a, b):
    DAY = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    MONTHS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    answer = b + sum(MONTHS[:a-1])
    #for num in range(1, a):
    #    answer += MONTHS[num-1]
    return DAY[answer % 7]