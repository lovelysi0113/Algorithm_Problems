'''/**
* ABOUT
*
* DATE: 2021-05-22
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10797
*
* COMMENT:
* 주어진 날짜와 같은 일의 자리의 갯수를 세면 된다
**/'''

today = int(input())
cars = list(map(int, input().split(' ')))

answer = 0
for car in cars:
    if car == today:
        answer += 1

print(answer)
