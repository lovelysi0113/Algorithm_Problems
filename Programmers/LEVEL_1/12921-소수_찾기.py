'''/**
* ABOUT
*
* DATE: 2021-04-10
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12921
*
* COMMENT:
* 1 ~ n 사이의 수를 각각 소수인지 검사한다
* num이 소수인지 확인할 때는 2~num의 제곱근 사이의 수에서 나누어 떨어지는 수가 있는지 체크한다
**/'''

import math


def solution(n):
    answer = 0
    for num in range(1, n + 1):
        if is_prime(num):
            answer += 1
    return answer


def is_prime(num):
    if num == 1:
        return False
    for chk in range(2, int(math.sqrt(num)) + 1):
        if num % chk == 0:
            return False
    return True
