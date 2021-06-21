'''/**
 * ABOUT
 *
 * DATE: 2021-06-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11279
 *
 * COMMENT:
 * 문제에서 요구하는 최대 힙을 구현하면 된다
 * 1. 입력값: x -> 배열에 자연수 x를 넣는다
 * 2. 입력값: 0 -> 배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다
 * python에서는 heapq 라이브러리를 사용하여 최대힙을 구현할 수 있다
 **/'''

import sys
import heapq

total = int(input())

heap = []
for _ in range(total):
    num = int(sys.stdin.readline())
    if num == 0:
        if len(heap) > 0:
            print(heapq.heappop(heap) * -1)
        else:
            print(0)
    else:
        heapq.heappush(heap, num * -1)