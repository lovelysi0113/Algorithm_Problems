'''/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/8393
*
* COMMENT:
* for문을 사용하여 1~input 수까지 더해주면 된다
**/'''

n = int(input())

answer = 0
for idx in range(1, n + 1):
    answer += idx

print(answer)
