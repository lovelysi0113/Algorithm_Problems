'''/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12954
*
* COMMENT:
* for문을 사용하여 n만큼 반복
* 전에 들어간 숫자 + x를 정답 배열에 넣어준다
**/'''

def solution(x, n):
    answer = []
    num = x
    
    for idx in range(0, n):
        answer.append(num)
        num += x
        
    return answer