'''/**
 * ABOUT
 *
 * DATE: 2021-08-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/16234
 *
 * COMMENT:
 * 인구 이동을 계속 진행하며 각 칸의 인구 수를 갱신해준다
 **/'''

from collections import deque

DELTAS = [(0, 1), (0, -1), (1, 0), (-1, 0)]

N, L, R = map(int, input().split(' '))
ground = [list(map(int, input().split(' '))) for _ in range(N)]

DELTAS = [(0, 1), (0, -1), (1, 0), (-1, 0)]
# bfs를 사용하여 인구 이동 진행
def bfs():
    # 방문한 칸 표시
    visited = [[False] * N for _ in range(N)]
    # 인구 이동이 진행되었는지 확인
    is_moved = False;

    # 인구 이동 시작
    for x in range(N):
        for y in range(N):
            if not visited[x][y]:
                # 방문할 칸 저장
                queue = deque()
                queue.append((x, y))
                visited[x][y] = True
                # 국경선을 연 칸들의 목록 - 연합
                open_group = [(x, y)]
                total = ground[x][y]
                while queue:
                    nx, ny = queue.popleft()
                    # 인접한 칸과 인구 차이를 비교하여 L~R 사이면 국경선 열기
                    for dx, dy in DELTAS:
                        chkx, chky = nx + dx, ny + dy
                        if 0 <= chkx < N and 0 <= chky < N and not visited[chkx][chky]:
                            differ = abs(ground[chkx][chky] - ground[nx][ny])
                            if L <= differ <= R:
                                # 국경선 열기
                                queue.append((chkx, chky))
                                open_group.append((chkx, chky))
                                visited[chkx][chky] = True
                                is_moved = True
                                total += ground[chkx][chky]
                # 연합을 이루고 있는 각 칸의 인구수 변경
                value = total // len(open_group)
                for ox, oy in open_group:
                    ground[ox][oy] = value
    return is_moved

# 인구 이동 계속 반복하기
move_count = 0
while True:
    if bfs():
        move_count += 1
    else:
        break

print(move_count)