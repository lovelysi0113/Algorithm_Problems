'''/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42576
*
* COMMENT:
* [ 해시 ]
* 정렬 후 이름을 비교한다
**/'''

def solution(participant, completion):
    par = sorted(participant)
    com = sorted(completion)
    
    answer = ''
    for idx in range(len(com)):
        if par[idx] != com[idx]:
            answer = par[idx]
            break
    else:
        answer = par[-1]
        
    return answer