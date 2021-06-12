'''/**
 * ABOUT
 *
 * DATE: 2021-06-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42587
 *
 * COMMENT:
 * [ 스택/큐 ]
 * 우선 대기목록(queue)에 모든 문서의 중요도와 그 문서의 위치를 넣는다(push)
 * 그리고 앞에서부터 하나씩 꺼내서(pop)
 * 만약 꺼낸 문서보다 더 중요한 문서가 있다면 대기목록의 맨 뒤로 넣고(push)
 * 아니라면 그대로 인쇄를 한다(인쇄 수 +1)
 * 현재 인쇄한 문서의 위치가 location와 같을 때까지 위 작업을 반복한다
 **/'''

from collections import deque

def solution(priorities, location):
    waiting_list = deque((el, idx) for idx, el in enumerate(priorities))
    
    print_fin = 0
    while waiting_list:
        item = waiting_list.popleft()
        if waiting_list and item[0] < max(waiting_list)[0]:
            waiting_list.append(item)
        else:
            print_fin += 1
            if item[1] == location:
                break
    
    return print_fin