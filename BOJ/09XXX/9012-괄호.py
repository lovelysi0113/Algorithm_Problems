'''/**
* ABOUT
*
* DATE: 2021-05-23
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/9012
*
* COMMENT:
* 괄호 문자열을 하나씩 검사하며 올바른 괄호 문자열(괄호의 모양이 바르게 구성)인지 확인한다
* 현재 문자가 '('이면 bracket에 넣는다(push)
* 현재 문자가 ')'이면 bracket에서 뺀다(pop)
* 만약 검사하는 도중에 bracket이 비거나 검사가 끝난 후 bracket에 남아있다면 이 괄호 문자열은 올바른 괄호 문자열이 아니다
**/'''

testcase = int(input())

for _ in range(testcase):
    string = input()
    bracket = []
    is_correct = True
    for ch in string:
        if ch == '(':
            bracket.append(ch)
        elif ch == ')':
            if len(bracket) == 0:
                is_correct = False
                break
            else:
                bracket.pop()

    if len(bracket) > 0:
        is_correct = False

    print('YES' if is_correct else 'NO')
