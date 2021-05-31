
'''/**
* ABOUT
*
* DATE: 2021-05-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42584
*
* COMMENT:
* [ 스택/큐 ] 
* 주식 가격이 계속 올라가면 stack에 넣어주고(append) 가격이 낮아지면 빼서(pop) 시간을 기록해준다
**/'''

def solution(prices):
    total = len(prices)
    answer = [0] * total
    stack = []
    
    for time, price in enumerate(prices):
        while stack and price < prices[stack[-1]]:
            now = stack.pop()
            answer[now] = time - now
        stack.append(time)
        
    while stack:
        chk = stack.pop()
        answer[chk] = (total -1) - chk
        
    return answer
