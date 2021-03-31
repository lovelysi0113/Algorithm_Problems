'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12925
*
* COMMENT:
* 숫자로 변환하기 전 부호를 확인해야 한다
**/'''

def solution(s):
    is_Minus = False
    answer = 0
    '''
    for num in s:
        if num == "-":
            is_Minus = True
        else:
            answer *= 10
            answer += int(num)
    if is_Minus:
        answer *= -1
    '''
    if s[0] == "-":
        answer = int(s[1:]) * -1
    else:
        answer = int(s)
    return answer