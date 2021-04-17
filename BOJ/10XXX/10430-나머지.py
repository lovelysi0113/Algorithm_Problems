'''/**
* ABOUT
*
* DATE: 2021-04-17
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10430
*
* COMMENT:
* 입력값 가져오는 방법 기억하기
**/'''

a, b, c = map(int, input().split())

print((a+b) % c)
print((a % c + b % c) % c)
print((a*b) % c)
print((a % c * b % c) % c)
