'''/**
* ABOUT
*
* DATE: 2021-05-12
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1085
*
* COMMENT:
* 현재 위치에서 각 4방향(위, 아래, 왼쪽, 오른쪽)으로 갔을 때 거리를 구한다음
* 그중에서 가장 최소인 거리를 찾으면 된다
**/'''

x, y, w, h = map(int, input().split(' '))

move_len = [h-y, y-0, x-0, w-x]  # up, down, left, right
print(min(move_len))
