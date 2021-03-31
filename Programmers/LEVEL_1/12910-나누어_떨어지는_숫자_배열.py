'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12910
*
* COMMENT:
* divisor로 나누어 떨어지는 값들을 새 배열에 넣는다
**/'''

def solution(arr, divisor):
    answer = []
    for num in arr:
        if num % divisor == 0:
            answer.append(num)
    if not answer:
        return [-1]
    else:
        return sorted(answer)