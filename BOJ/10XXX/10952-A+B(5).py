'''/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10952
*
* COMMENT:
* a, b의 입력값이 0이 들어올 때까지 while문으로 반복 작업한다
**/'''

while True:
    a, b = map(int, input().split(' '))
    if a == 0 and b == 0:
        break
    else:
        print(a + b)
