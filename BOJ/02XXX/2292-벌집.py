'''/**
* ABOUT
*
* DATE: 2021-05-10
* AUTHOR: lovelysi0113
*
* URL: https: // www.acmicpc.net/problem/2292
*
* COMMENT:
* 중앙의 방 1을 기준으로 둘러싼 방들을 각 레이어라고 이름을 붙인다면
* (즉, n 레이어 = 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 n개의 방을 지나감)
* 1 레이어: 1
* 2 레이어: 2 ~ 7 = (1) + 1 ~ (1) + 6*1
* 3 레이어: 8 ~ 19 = (1 + 6*1) + 1 ~ (1 + 6*1) + 6*2
* ...
* n 레이어: (1+6*(0~n-2까지의 합)) + 1 ~ (1+6*(0~n-2까지의 합)) + 6*(n-1)
* 이를 토대로 N번 방이 몇번째 레이어에 있는지 계산하면 원하는 답을 구할 수 있다
**/'''

num = int(input())
layer = 1
total = 1
while total < num:
    total += 6 * layer
    layer += 1

print(layer)
