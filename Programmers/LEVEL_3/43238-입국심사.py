'''/**
 * ABOUT
 *
 * DATE: 2021-06-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/43238
 *
 * COMMENT:
 * [ 이분탐색 ]
 * 심사 시간(1 ~ 심사관 중 가장 오래 걸리는 시간 * n명) 범위에서 이분탐색을 하며
 * 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 찾는다
 * 모든 사람이 심사를 받는데 걸리는 시간을 중간값으로 가정한 다음
 * 이 시간동안 각 심사관이 검사할 수 있는 사람의 수를 구해 모두 더한다
 * 이 합이 n과 비교하여 크면 심사 시간 범위의 최대값을 줄이고
 * n보다 작으면 심사 시간 범위의 최소값을 키우는 방식으로 진행하여
 * 가능한 시간들 중 가장 최솟값을 구한다
 **/'''

def solution(n, times):
    # 심사관 배열을 검사 시간이 적은 순으로 정렬
    times.sort()
    
    minTime = 1
    maxTime = n * times[len(times) - 1]
    answer = maxTime
    
    while minTime <= maxTime:
        # 모든 사람이 심사를 받는데 걸리는 시간을 midTime이라고 가정
        midTime = (minTime + maxTime) // 2
        # midTime 시간동안 심사 받을 수 있는 사람의 수를 구함
        people = 0
        for time in times:
            # 한 심사관 당 심사 가능한 사람 수
            people += midTime // time
            if people >= n:
                # n명 이상이 심사 받을 수 있는 시간 중 최솟값 구하기
                answer = min(answer, midTime)
        # 심사받는 사람 수에 따라 심사 시간 조정
        if people >= n:
            maxTime = midTime - 1
        else:
            minTime = midTime + 1
    
    return answer