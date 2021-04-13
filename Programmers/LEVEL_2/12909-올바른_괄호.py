'''/**
* ABOUT
*
* DATE: 2021-04-13
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12909
*
* COMMENT:
* 문자열 s를 처음부터 탐색하며 다음과 같은 작업을 진행한다
* 1) 열린 괄호 '('가 나올 때마다 배열에 담아준다
* 2) 닫힌 괄호 ')'가 나올 때 배열에서 열린 괄호 하나씩 빼준다
* 2-1) 만약 배열에서 빼낼게 없으면 짝이 안맞는 것이므로 False이다
* 문자열 s를 모두 탐색한 후 열린 괄호가 남아있는지 확인하여 True/False를 반환한다
**/'''


def solution(s):
    if len(s) % 2 == 1:
        return False

    open_bracket = []
    for ch in s:
        if ch == '(':
            open_bracket.append(ch)
        elif ch == ')':
            if len(open_bracket) == 0:
                return False
            else:
                open_bracket.pop()

    return len(open_bracket) == 0
