'''/**
 * ABOUT
 *
 * DATE: 2021-08-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14502
 *
 * COMMENT:
 * 빈 공간에 벽을 3개 세우고 BFS를 사용하여 바이러스가 퍼지게 한 후, 안전 영역의 개수를 세어보았다
 **/'''

from collections import deque
import copy

N, M = map(int, input().split(' '))
room = [list(map(int, input().split(' '))) for _ in range(N)]

virus_list = [] # # 바이러스 리스트
empty_list = [] # 빈 칸 리스트
for i in range(N):
    for j in range(M):
        if room[i][j] == 0:
            empty_list.append((i, j))
        if room[i][j] == 2:
            virus_list.append((i, j))


# 바이러스 퍼진 후 안전 영역의 개수를 세는 함수(bfs 사용)
def spread_virus():
    # test를 위해 room 복사
    test = copy.deepcopy(room)
    virus = deque(virus_list)
    visited = [[False] * M for _ in range(N)]

    # 바이러스 퍼짐
    moves = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    while virus:
        x, y = virus.popleft()
        for move in moves:
            newx, newy = x + move[0], y + move[1]
            if 0 <= newx < N and 0 <= newy < M and test[newx][newy] == 0 and visited[newx][newy] == False:
                visited[newx][newy] = True
                test[newx][newy] = 2
                virus.append((newx, newy))
    
    # 안전 영역 개수 세기
    safe = 0
    for i in range(N):
        for j in range(M):
            if test[i][j] == 0:
                safe += 1
    return safe
    
# 모든 영역에 3개씩 벽을 세워보며 바이러스가 퍼졌을 때 얻을 수 있는 안전 영역 크기의 최댓값 구하기
max_safe = 0

# 빈 칸 리스트를 사용하여 벽 세우기
empty = len(empty_list)
for one in range(empty):
    for two in range(one+1, empty):
        for three in range (two+1, empty):
            # 벽 3개
            x1, y1 = empty_list[one]
            x2, y2 = empty_list[two]
            x3, y3 = empty_list[three]
            
            # 벽 세우고 바이러스 퍼뜨려서 안전 영역 크기 확인
            room[x1][y1] = 1
            room[x2][y2] = 1
            room[x3][y3] = 1
            max_safe = max(max_safe, spread_virus())
            
            # 원래 상태로 복구
            room[x1][y1] = 0
            room[x2][y2] = 0
            room[x3][y3] = 0
                    
print(max_safe)