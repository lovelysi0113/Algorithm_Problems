'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12918
*
* COMMENT:
* isdigit() 메서드를 사용하여 문자열 s가 숫자로만 구성되어 있는지 확인한다
**/'''

def solution(s):
    if len(s) != 4 and len(s) != 6:
        return False
    if not s.isdigit():
        return False
    return True