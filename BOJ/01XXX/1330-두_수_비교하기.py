'''/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1330
*
* COMMENT:
* a, b 값을 비교하여 if문을 사용해 다르게 출력하면 된다
**/'''

a, b = map(int, input().split(' '))

if a > b:
    print('>')
elif a == b:
    print('==')
else:
    print('<')
