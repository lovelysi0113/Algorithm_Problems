'''/**
 * ABOUT
 *
 * DATE: 2021-06-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42839
 *
 * COMMENT:
 * 종이 조각을 사용하여 나올 수 있는 모든 경우의 수를 구한 후(permutations)
 * set으로 중복되는 수를 제외하고 남은 수들에 대해 소수를 판별(함수 is_prime)한다
 **/'''

from itertools import permutations

def solution(numbers):
    result = set()
    for idx in range(1, len(numbers)+1):
        # idx = 선택할 종이 조각의 갯수
        group = list(permutations(numbers, idx))
        for chk in group:
            chk = int(''.join(chk))
            if is_prime(chk):
                result.add(chk)      
    return len(result)

# 소수인지 판별하는 함수
def is_prime(num):
    if num < 2:
        return False
    if num == 2:
        return True
    for chk in range(2, int(num ** 0.5)+1):
        if num % chk == 0:
            return False
    return True