'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12919
*
* COMMENT:
* for문으로 "Kim"이 어디에 있는지 찾는다
**/'''

def solution(seoul):
    for idx in range(0, len(seoul)):
        if seoul[idx] == "Kim":
            return "김서방은 {}에 있다".format(idx)