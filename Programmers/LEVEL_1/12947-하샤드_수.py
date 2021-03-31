'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12947
*
* COMMENT:
* 10으로 나눈 나머지로 자릿수를 구할 수 있다
**/'''

def solution(x):
    num = x
    div = 0
    while num > 0:
        div += num % 10
        num //= 10
    if x % div == 0:
        return True
    else:
        return False