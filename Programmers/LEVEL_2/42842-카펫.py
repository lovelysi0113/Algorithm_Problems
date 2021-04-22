'''/**
* ABOUT
*
* DATE: 2021-04-22
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42842
*
* COMMENT:
* [ 완전탐색 ]
*  yellow의 가로 길이를 x, 세로 길이를 y로 한다면
* yellow = x * y, brown = (x + y) * 2 - 4 의 값을 가진다
* 그래서 두 식을 만족하는 x, y의 값을 찾아내면 된다
* 우선 yellow의 약수를 구한 후(x, y가 될 수 있는 경우의 수)
* x + y가 (brown-4) / 2가 되는 x, y를 찾는다
**/'''

import math


def solution(brown, yellow):
    nums = []
    for num in range(1, int(math.sqrt(yellow))+1):
        if yellow % num == 0:
            nums.append(num)
            nums.append(yellow / num)

    brown = (brown - 4) / 2
    while len(nums) > 0:
        y = nums.pop(0)
        x = nums.pop(0)
        if x + y == brown:
            return [x+2, y+2]
