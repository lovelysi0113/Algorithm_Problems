'''/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12950
*
* COMMENT:
* 문제에 나온대로 같은 행, 같은 열의 값을 더해주면 된다
**/'''


def solution(arr1, arr2):
    row = len(arr1)
    column = len(arr1[0])
    for idx in range(0, row):
        for col in range(0, column):
            arr1[idx][col] += arr2[idx][col]
    return arr1
