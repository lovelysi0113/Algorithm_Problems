'''/**
 * ABOUT
 *
 * DATE: 2021-08-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14500
 *
 * COMMENT:
 * 가능한 모양의 테트로미노를 구한 후
 * 모든 맵을 돌면서 테트로미노를 놓아보면서 테트로미노가 놓인 칸에 쓰인 수들의 합의 최댓값을 구한다
 **/'''

blocks = (
    ((0,1), (0,2), (0,3)),
    ((1,0), (2,0), (3,0)),
    ((1,0), (1,1), (1,2)),
    ((0,1), (1,0), (2,0)),
    ((0,1), (0,2), (1,2)),
    ((1,0), (2,0), (2,-1)),
    ((0,1), (0,2), (-1,2)),
    ((1,0), (2,0), (2,1)),
    ((0,1), (0,2), (1,0)),
    ((0,1), (1,1), (2,1)),
    ((0,1), (1,0), (1,1)),
    ((0,1), (-1,1), (-1,2)),
    ((1,0), (1,1), (2,1)),
    ((0,1), (1,1), (1,2)),
    ((1,0), (1,-1), (2,-1)),
    ((0,1), (0,2), (-1,1)),
    ((0,1), (0,2), (1,1)),
    ((1,0), (2,0), (1,1)),
    ((1,0), (2,0), (1,-1)),
)

n,m = map(int,input().split())
score_map = [list(map(int,input().split())) for _ in range(n)]

answer = 0

for i in range(n):
    for j in range(m):
        for block in blocks:
            isRight = True
            sum_chk = score_map[i][j]
            for dx, dy in block:
                x, y = i+dx, j+dy
                if 0 <= x < n and 0 <= y < m:
                    sum_chk += score_map[x][y]
                else:
                    isRight = False
                    break
            if isRight and answer < sum_chk:
                answer = sum_chk

print(answer)