'''/**
* ABOUT
*
* DATE: 2021-04-05
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12926
*
* COMMENT:
* 현재 문자열의 위치에서 n만큼 이동하여 새로운 문자열을 구한다
**/'''


def solution(s, n):
    ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

    answer = ''
    for idx in range(0, len(s)):
        if s[idx] == ' ':
            answer += s[idx]
        else:
            chgStr = s[idx].lower()
            chkCase = s[idx].isupper()
            newIdx = ALPHABET.index(chgStr)
            chgStr = ALPHABET[(newIdx + n) % 26]
            if chkCase:
                chgStr = chgStr.upper()
            answer += chgStr

    return answer
