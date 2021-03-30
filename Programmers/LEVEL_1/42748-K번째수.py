'''/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42748
*
* COMMENT:
* [ 정렬 ]
* 문제에 나온 순서대로 그대로 실행한다
**/'''

def solution(array, commands):
    answer = []
    for command in commands:
        slice_array = array[(command[0]-1):command[1]]
        slice_array.sort()
        answer.append(slice_array[command[2]-1])
    return answer