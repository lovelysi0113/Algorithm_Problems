'''/**
 * ABOUT
 *
 * DATE: 2021-08-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/16235
 *
 * COMMENT:
 * 문제에 나온 방식으로 1년마다 나무의 나이를 더해주고, 나무를 심고, 양분을 뿌려준다
 **/'''

import sys

N, M, K = map(int, sys.stdin.readline().split(' '))
A = [list(map(int, sys.stdin.readline().split(' '))) for _ in range(N)]

# 가장 처음에 양분은 모든 칸에 5만큼 들어있다
ground = [[5] * N for _ in range(N)]
# M개의 나무를 구매해 땅에 심었다
trees = [[[] for _ in range(N)] for _ in range(N)]
for _ in range(N+1, N+1+M):
    x, y, age = map(int, sys.stdin.readline().split(' '))
    trees[x-1][y-1].append(age)

DELTA = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

while K > 0:
    new_trees = [[0] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            temp = []
            # 하나의 칸에 여러 개의 나무가 있다면, 나이가 어린 나무부터 양분을 먹는다
            trees[i][j].sort()
            dead = 0
            for tree in trees[i][j]:
                if tree <= ground[i][j]:
                    # 나무가 자신의 나이만큼 양분을 먹고, 나이가 1 증가
                    ground[i][j] -= tree
                    temp.append(tree+1)
                    # 번식하는 나무는 나이가 5의 배수이어야 하며
                    if (tree+1) % 5 == 0:
                        # 인접한 8개의 칸에 나이가 1인 나무가 생긴다
                        for dx, dy in DELTA:
                            nx, ny = i + dx, j + dy
                            if 0<= nx < N and 0 <= ny < N:
                                # 상도의 땅을 벗어나는 칸에는 나무가 생기지 않는다
                                new_trees[nx][ny] += 1
                else:
                    # 땅에 양분이 부족해 자신의 나이만큼 양분을 먹을 수 없는 나무는 양분을 먹지 못하고 즉시 죽는다
                    dead += tree // 2
            trees[i][j] = temp
            # 죽은 나무가 양분으로 변하게 된다
            # +  S2D2가 땅을 돌아다니면서 땅에 양분을 추가한다. 각 칸에 추가되는 양분의 양은 A[r][c]
            ground[i][j] += dead + A[i][j]
    for i in range(N):
        for j in range(N):
            for _ in range(new_trees[i][j]):
                trees[i][j].append(1)
    # 1년이 지남
    K -= 1
    
# K년이 지난 후 상도의 땅에 살아있는 나무의 개수 구하기
answer = 0
for i in range(N):
    for j in range(N):
        answer += len(trees[i][j])

print(answer)