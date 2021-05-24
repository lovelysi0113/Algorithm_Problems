'''/**
* ABOUT
*
* DATE: 2021-05-24
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2845
*
* COMMENT:
* 1m2당 사람의 수 L와 파티가 열렸던 곳의 넓이 P로 총 참가자 수를 구할 수 있다(L * P)
**/'''

people, area = map(int, input().split(' '))
total = people * area
differ = list(map(int, input().split(' ')))

answer = ''
for num in differ:
    answer += str(num - total) + ' '

print(answer)
