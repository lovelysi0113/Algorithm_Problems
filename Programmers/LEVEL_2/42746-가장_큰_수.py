'''/**
* ABOUT
*
* DATE: 2021-04-05
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42746
*
* COMMENT:
* [ 정렬 ]
* 두 수를 비교하여 앞자리가 더 큰 수를 앞으로 가게 정렬하였다
**/'''


def solution(numbers):
    if numbers.count(0) == len(numbers):
        return '0'

    numbers.sort(key=chgStr, reverse=True)
    return ''.join(map(str, numbers))


def chgStr(num):
    new = str(num)
    last = new[len(new)-1]
    for idx in range(len(new), 5):
        new += new[0]
    return [new, last, len(str(num))]
