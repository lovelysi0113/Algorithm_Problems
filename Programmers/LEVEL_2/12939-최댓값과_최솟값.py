'''/**
* ABOUT
*
* DATE: 2021-04-13
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12939
*
* COMMENT:
* split()을 사용하여 숫자들을 배열에 담아둔 후
* 하나씩 비교하며 최솟값과 최댓값을 찾으면 되는 간단한 문제이다
**/'''


def solution(s):
    s = s.split(' ')

    max_num = s[0]
    min_num = s[0]
    for num in s:
        if int(num) > int(max_num):
            max_num = num
        elif int(num) < int(min_num):
            min_num = num

    return min_num + ' ' + max_num
