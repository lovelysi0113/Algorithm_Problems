'''/**
* ABOUT
*
* DATE: 2021-04-07
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/1844
*
* COMMENT:
* BFS를 이용한다
* queue를 사용하여 앞으로 갈 수 있는 위치를 모두 확인한다
**/'''

from collections import deque


def solution(maps):
    n, m = len(maps), len(maps[0])

    # 1X1 지도인 경우
    if n == 1 and m == 1:
        return 1

    BLOCKED = 0
    DELTAS = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    visited = [[False] * m for _ in range(n)]

    queue = deque()
    queue.append((0, 0, 1))

    while queue:
        x, y, weight = queue.popleft()
        for dx, dy in DELTAS:
            next_x, next_y = x + dx, y + dy
            # 움직인 위치가 지도 안 범위인지 확인
            if not is_valid(next_x, next_y, n, m):
                continue
                # 움직인 위치가 벽이거나 이미 방문한 곳이라면
            if maps[next_x][next_y] == BLOCKED or visited[next_x][next_y]:
                continue
                # 움직인 위치가 우측 하단에 도달했는지 확인
            if next_x == n-1 and next_y == m-1:
                return weight + 1
            queue.append((next_x, next_y, weight+1))
            visited[next_x][next_y] = True

    return -1


def is_valid(x, y, n, m):
    return 0 <= x < n and 0 <= y < m
