'''/**
* ABOUT
*
* DATE: 2021-05-27
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1297
*
* COMMENT:
* 피타고라스의 정리를 사용하여 대각선의 비율을 구할 수 있고 이를 토대로 실제 너비, 높이를 구할 수 있다
* 피타고라스 정리: 너비의 제곱 + 높이의 제곱 = 대각선의 제곱
**/'''

import math

diagonal, ratio_width, ratio_height = map(int, input().split(' '))

ratio_diagonal = math.sqrt(
    ratio_width * ratio_width + ratio_height * ratio_height)
ratio_len = diagonal / ratio_diagonal

width = int(ratio_len * ratio_width)
height = int(ratio_len * ratio_height)

print(width, height)
