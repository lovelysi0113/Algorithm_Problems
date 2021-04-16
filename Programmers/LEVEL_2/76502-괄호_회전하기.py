'''/**
* ABOUT
*
* DATE: 2021-04-16
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/76502
*
* COMMENT:
* 우선 여는 괄호, 닫힌 괄호의 수를 세서 갯수가 맞는지 확인한다
* 만약 다르면 회전을 몇번이든 해도 올바른 괄호 문자열이 나오지 않기 때문이다
* 갯수가 맞다면 회전을 계속 해보며 그때의 문자열이 올바른 괄호 문자열인지 확인한다
* 회전을 하며 나왔던 올바른 괄호 문자열의 총 갯수를 리턴한다
**/'''


def solution(s):
    brackets = {'(': 0, ')': 0, '[': 0, ']': 0, '{': 0, '}': 0}
    for ch in s:
        brackets[ch] += 1
    if brackets['('] != brackets[')'] or brackets['['] != brackets[']'] or brackets['{'] != brackets['}']:
        return 0

    answer = 0
    rotation = 0
    while rotation < len(s):
        open = []
        is_right = True
        for ch in s:
            if ch in '([{':
                open.append(ch)
            else:
                if len(open) == 0:
                    is_right = False
                    break
                last = open.pop()
                if (ch == ')' and last != '(') or (ch == ']' and last != '[') or (ch == '}' and last != '{'):
                    is_right = False
                    break
        if is_right:
            answer += 1
        rotation += 1
        s = s[1:] + s[0]
    return answer
