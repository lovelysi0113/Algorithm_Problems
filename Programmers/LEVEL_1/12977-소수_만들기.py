'''/**
* ABOUT
*
* DATE: 2021-04-06
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12977
*
* COMMENT:
* 세 수를 선택해 그 합이 소수인지 확인했다
* 이때, combinations() 함수를 사용해서 세 수를 선택하는 방법을 사용했다(조합구하기)
**/'''

from itertools import combinations
import math


def solution(nums):
    select_three = list(combinations(nums, 3))

    answer = 0
    for three in select_three:
        if is_prime(sum(three)):
            answer += 1

    return answer


def is_prime(num):
    for chk in range(2, int(math.sqrt(num)) + 1):
        if num % chk == 0:
            return False
    return True
