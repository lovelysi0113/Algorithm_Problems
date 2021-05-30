'''/**
* ABOUT
*
* DATE: 2021-05-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42626
*
* COMMENT:
* [ 힙(Heap) ]
* 모든 음식의 스코빌 지수를 heapq에 넣었다
* heapq를 사용한 이유는 일반적인 리스트와 다르게, 가지고 있는 요소를 push, pop 할때마다 자동으로 정렬해주기 때문이다
* heapq는 오름차순으로 정렬되기 때문에 맨 앞 요소가 K 이상이 될 때까지 새로운 스코빌 지수를 만드는 것을 반복하면 된다
* 만약 heapq의 길이가 1이면 새로운 스코빌 지수를 만들 수 없으므로 IndexError 처리를 해주었다
**/'''

import heapq

def solution(scoville, K):
    heap = []
    for num in scoville:
        heapq.heappush(heap, num)
    
    mix_cnt = 0
    while heap[0] < K:
        try:
            new_food = heapq.heappop(heap) + (heapq.heappop(heap) * 2)
            heapq.heappush(heap, new_food)
        except IndexError: 
            return -1
        mix_cnt += 1
    
    return mix_cnt