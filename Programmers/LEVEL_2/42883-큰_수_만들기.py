'''/**
 * ABOUT
 *
 * DATE: 2021-06-08
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42883
 *
 * COMMENT:
 * numbers의 숫자를 앞에서부터 차례대로 하나씩 stack에 넣어준다(push)
 * 넣기 전에 stack의 최상단에 있는 숫자가 넣으려는 숫자보다 작으면 빼주고(pop) 넣는다
 * 모든 수를 stack에 넣은 후, 아직 빼야할 숫자의 갯수가 남아있다면
 * stack의 최상단에서부터 그 갯수만큼 제거하면 된다
 **/'''

def solution(number, k):
    stack = []
    stack.append(number[0])
    for num in number[1:]:
        while len(stack) > 0 and k > 0 and stack[-1] < num:
            k -= 1
            stack.pop()
        stack.append(num)
        
    if k > 0:
        stack = stack[:-k]
    
    return ''.join(stack)