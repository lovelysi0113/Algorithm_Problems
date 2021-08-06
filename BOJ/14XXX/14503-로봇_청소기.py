'''/**
 * ABOUT
 *
 * DATE: 2021-08-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14503
 *
 * COMMENT:
 * 문제에 나온 방식으로 로봇 청소기를 작동시키면서 청소한다
 **/'''

move = [[-1, 0], [0, 1], [1, 0], [0, -1]]

N, M = map(int, input().split(' '))
x, y, turn = map(int, input().split(' '))
room = [list(map(int, input().split(' '))) for _ in range(N)]

# 청소하는 칸의 개수
clean = 0

# 로봇 청소기 작동
while True:
    # 1. 현재 위치를 청소한다: 빈칸(0) -> 청소(2)
    if room[x][y] == 0:
        room[x][y] = 2
        clean += 1
    
    # 2. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향부터 차례대로 인접한 칸을 탐색
    # c. 네 방향 모두 청소가 이미 되어있거나 벽인 경우
    if room[x-1][y] != 0 and room[x+1][y] != 0 and room[x][y-1] != 0 and room[x][y+1] != 0:
        dx, dy = move[turn]
        # d. 뒤쪽 방향이 벽이라 후진도 할 수 없는 경우 -> 종료
        if room[x-dx][y-dy] == 1:
            break
        # c. 바라보는 방향을 유지한 채로 한 칸 후진
        else:
            x, y = x - dx, y - dy
    else:
        # 왼쪽 방향으로 회전
        turn = (turn + 3) % 4
        # a. 왼쪽 방향에 아직 청소하지 않은 공간이 존재 -> 1칸 전진
        # b. 왼쪽 방향에 청소할 공간이 없음 -> 행동 X
        dx, dy = move[turn]
        if room[x+dx][y+dy] == 0:
            x, y = x + dx, y + dy

print(clean)