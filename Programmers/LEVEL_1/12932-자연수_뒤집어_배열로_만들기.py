'''/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12932
*
* COMMENT:
* n % 10 으로 자릿수를 구할 수 있다
**/'''

def solution(n):
    answer = []
    
    while (n > 0):
        answer.append(n % 10)
        n = n // 10
        
    return answer