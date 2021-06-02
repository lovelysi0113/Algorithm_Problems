'''/**
 * ABOUT
 *
 * DATE: 2021-06-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12951
 *
 * COMMENT:
 * JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열이므로
 * 첫번째로 시작하는 문자, 공백(' ') 다음에 나오는 문자는 대문자로 변환(upper())해주고
 * 나머지 문자는 모두 소문자로 변환(lower())해주면 된다
 **/'''

def solution(s):
    answer = ''
    
    for idx, ch in enumerate(s):
        if ch != ' ' and (idx == 0 or s[idx-1] == ' '):
            answer += ch.upper()
        else:
            answer += ch.lower()
            
    return answer