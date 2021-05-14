'''/**
* ABOUT
*
* DATE: 2021-05-14
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/77884
*
* COMMENT:
* 약수의 개수가 홀수인 정수는 제곱수일 때이다
* 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 빼라고 했으므로
* 제곱수일 때는 빼고 제곱수가 아닌 수는 더하면 원하는 답을 구할 수 있다
**/'''

import math


def solution(left, right):
    answer = 0
    for num in range(left, right+1):
        if num % math.sqrt(num) == 0:
            answer -= num
        else:
            answer += num
    return answer
