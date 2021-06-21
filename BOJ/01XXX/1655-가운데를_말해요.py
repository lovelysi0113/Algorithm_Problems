'''/**
 * ABOUT
 *
 * DATE: 2021-06-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1655
 *
 * COMMENT:
 * 최소힙과 최대힙을 사용하여 중간값을 찾았다
 * 1. 최소힙의 크기 <= 최대힙의 크기
 * 2. 최소힙의 root < 최대힙의 root
 * 를 항상 만족하도록 숫자를 넣으면 중간값은 항상 최소힙의 root가 된다
 **/'''

import sys
import heapq

total = int(sys.stdin.readline())

min_heap = []
max_heap = []
for _ in range(total):
    num = int(sys.stdin.readline())
    if len(max_heap) == len(min_heap):
        heapq.heappush(max_heap, (-num, num))
    else:
        heapq.heappush(min_heap, (num, num))
    if min_heap and max_heap[0][1] > min_heap[0][1]:
        max_value = heapq.heappop(max_heap)[1]
        min_value = heapq.heappop(min_heap)[1]
        heapq.heappush(min_heap, (max_value, max_value))
        heapq.heappush(max_heap, (-min_value, min_value))
    print(max_heap[0][1])