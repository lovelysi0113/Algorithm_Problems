'''/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12917
*
* COMMENT:
* 대문자, 소문자를 분리하고 내림차순 정렬을 한 후 다시 합쳤다
**/'''

def solution(s):
    arrLower = []
    arrUpper = []
    
    for ch in s:
        if (ch.islower()):
            arrLower.append(ch)
        else:
            arrUpper.append(ch)
    
    arrLower.sort(reverse=True)
    arrUpper.sort(reverse=True)
    return "".join(arrLower + arrUpper)