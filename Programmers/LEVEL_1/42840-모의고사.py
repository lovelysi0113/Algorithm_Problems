'''/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42840
*
* COMMENT:
* [ 완전탐색 ]
* 각각 몇문제를 맞추었는지 계산한 후
* 가장 많은 문제를 맞힌 사람을 찾는다
**/'''

def solution(answers):
    person1 = (1, 2, 3, 4, 5)
    person2 = (2, 1, 2 ,3, 2, 4, 2, 5)
    person3 = (3, 3, 1, 1, 2, 2, 4, 4, 5, 5)
    
    answer = {1: 0, 2: 0, 3: 0}
    for idx, ans in enumerate(answers):
        if person1[idx % len(person1)] == ans:
            answer[1] += 1
        if person2[idx % len(person2)] == ans:
            answer[2] += 1
        if person3[idx % len(person3)] == ans:
            answer[3] += 1

    max_ans = max(answer.values())
    persons = []
    for idx in range(1, 4):
        if answer[idx] == max_ans:
            persons.append(idx)
    return persons