'''/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/14681
*
* COMMENT:
* x, y의 기호(양수/음수)를 판단하여 주어진 점이 어느 사분면에 속하는지 알 수 있다
**/'''

x = int(input())
y = int(input())

if x > 0 and y > 0:
    print(1)
elif x < 0 and y > 0:
    print(2)
elif x < 0 and y < 0:
    print(3)
elif x > 0 and y < 0:
    print(4)
