'''/**
 * ABOUT
 *
 * DATE: 2021-06-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2525
 *
 * COMMENT:
 * 현재 시각에서 요리 시간을 더한 후의 시각을 구하면 된다
 * 단, 23시 59분에서 1분이 지나면 0시 0분이 되는 것에 주의해야 한다
 **/'''

H, M = map(int, input().split(' '))
cook = int(input())

M += cook
H += M // 60
if H > 23:
    H = H % 24
M = M % 60

print(H, M);