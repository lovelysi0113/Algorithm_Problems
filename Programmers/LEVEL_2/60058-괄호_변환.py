'''/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/60058
*
* COMMENT:
* 문제에 나온 순서대로 한단계씩 코드를 작성하여 "올바른 괄호 문자열"을 만들면 된다
**/'''


def chk_str_right(u):
    # 올바른 괄호 문자열인지 확인하는 함수
    chk_open = 0
    chk_close = 0
    for chk in u:
        if chk == '(':
            chk_open += 1
        elif chk == ')':
            chk_close += 1
        if chk_open < chk_close:
            return False
    return True


def chg_str_order(w):
    # 올바른 괄호 문자열로 변환하는 함수
    # 빈 문자열 확인
    if w == '':
        return ''
    u = ''
    v = ''
    # u, v 분리
    chk_open = 0
    chk_close = 0
    for idx, value in enumerate(w):
        if value == '(':
            chk_open += 1
        elif value == ')':
            chk_close += 1
        if chk_open == chk_close:
            u = w[:idx+1]
            if idx+2 < len(w):
                v = w[idx+1:]
            break
    # u가 올바른 괄호 문자열인지 확인
    str_right = chk_str_right(u)
    # 문자열 u가 "올바른 괄호 문자열" 이라면
    if str_right:
        newstr = u + chg_str_order(v)
    # 문자열 u가 "올바른 괄호 문자열"이 아니라면
    else:
        newu = u[1:len(u)-1]
        chgu = ''
        for value in newu:
            if value == '(':
                chgu += ')'
            elif value == ')':
                chgu += '('
        newstr = '(' + chg_str_order(v) + ')' + chgu
    return newstr


def solution(p):
    # 올바른 괄호 문자열인지 확인
    str_right = chk_str_right(p)

    # 올바른 괄호 문자열로 변환한 결과 return
    if not str_right:
        answer = chg_str_order(p)
    else:
        answer = p

    return answer
