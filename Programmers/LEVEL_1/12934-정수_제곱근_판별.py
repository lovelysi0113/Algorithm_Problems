'''/**
* ABOUT
*
* DATE: 2021-04-05
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12934
*
* COMMENT:
* math.sqrt() 함수를 사용한다
**/'''

import math


def solution(n):
    chk = math.sqrt(n)
    if chk == int(chk):
        return (chk + 1) * (chk + 1)
    else:
        return -1
