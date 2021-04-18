'''/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2884
*
* COMMENT:
* 45분 앞으로 갔을 때 앞의 시 부분이 바뀌는지 확인하고
* 시 부분이 0시 이전으로 가는지도 확인해주면 된다
**/'''

h, m = map(int, input().split(' '))

m = m - 45
if m < 0:
    m = m + 60
    h = h - 1
if h < 0:
    h = 23

print(h, m)
