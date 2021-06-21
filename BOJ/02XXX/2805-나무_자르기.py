'''/**
 * ABOUT
 *
 * DATE: 2021-06-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2805
 *
 * COMMENT:
 * 절단기 높이(0 ~ 가장 긴 나무의 높이) 범위에서 이분탐색을 하며
 * 절단기에 설정할 수 있는 높이의 최댓값을 찾는다
 * 절단기에 설정할 높이를 중간값으로 가정한 다음
 * 이 길이에서 나올 수 있는 잘린 나무들의 총 길이를 구한다
 * 이 합을 M과 비교하여 작으면 절단기 높이 범위의 최댓값을 줄이고
 * M보다 크면 절단기 높이 범위의 최솟값을 키우는 방식으로 진행하여
 * 가능한 높이 중 가장 최댓값을 구한다
 **/'''

import sys

N, M = map(int, sys.stdin.readline().split())
trees = list(map(int, sys.stdin.readline().split()))

min_height = 1
max_height = max(trees)
answer = 0

while min_height <= max_height:
    mid_height = (min_height + max_height) // 2
    cut_tree = sum([(tree-mid_height if tree > mid_height else 0) for tree in trees])
    if cut_tree >= M:
        answer = max(answer, mid_height)
        min_height = mid_height + 1
    else:
        max_height = mid_height - 1

print(answer)