'''/**
* ABOUT
* DATE: 2021-06-03
* AUTHOR: lovelysi0113
* 
* URL: https://programmers.co.kr/learn/courses/30/lessons/12973
* 
* COMMENT:
* stack에 문자열 s의 알파벳을 하나씩 넣으면서(push)
* 맨 위 두개의 알파벳이 같으면 두 개를 모두 빼내는(pop) 작업을 반복한다
* stack에 s를 모두 넣은 후에 남은 문자가 있는지를 체크하여 문자열을 모두 제거할 수 있는지 확인할 수 있다
**/'''

def solution(s):
    stack = []
    
    for ch in s:
        stack.append(ch)
        if len(stack) > 1 and stack[-1] == stack[-2]:
            stack.pop()
            stack.pop()
    
    return 1 if len(stack) == 0 else 0