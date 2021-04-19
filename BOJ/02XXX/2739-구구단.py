'''/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2739
*
* COMMENT:
* for문을 사용하여 1~9까지 출력해주면 된다
**/'''

n = int(input())

for idx in range(1, 10):
    print('{0} * {1} = {2}'.format(n, idx, n * idx))
