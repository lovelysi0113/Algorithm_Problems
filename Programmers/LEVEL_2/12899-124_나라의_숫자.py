'''/**
* ABOUT
*
* DATE: 2021-04-03
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12899
*
* COMMENT:
* 3진법처럼 바꾼 후 나온 숫자를 124 나라의 규칙대로 바꾸면 된다
* n = 3^k * (A) + 3^(k-1) * (A) + … + (A)로 표현 가능(이때 A는 1,2,3 중 하나)
**/'''


def solution(n):
    changeNum = []
    last = 0
    while n > 0:
        last = 3 if n % 3 == 0 else n % 3
        changeNum.append(last)
        n = (n - last) // 3

    answer = ''
    while changeNum:
        now = changeNum.pop()
        if now == 1:
            answer += '1'
        elif now == 2:
            answer += '2'
        elif now == 3:
            answer += '4'

    return answer
