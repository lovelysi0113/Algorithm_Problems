'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12930
*
* COMMENT:
* 문자열 전체 기준이 아닌 단어를 기준으로 인덱스를 확인하여 대/소문자로 변환해야 한다
**/'''

def solution(s):
    answer = ''
    chk = -1
    for ch in s:
        if ch == " ":
            chk = -1
        else:
            chk += 1
            if chk % 2 == 0:
                ch = ch.upper()
            else:
                ch = ch.lower()
        answer += ch
    return answer