'''/**
 * ABOUT
 * DATE: 2021-06-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12978
 *
 * COMMENT:
 * 우선 입력으로 주어진 road 정보를 토대로 map을 만든다
 * (map[a][b] = time: 마을 a에서 마을 b까지 가는데 걸리는 시간은 time)
 * 그리고 1번 마을부터 시작하여 다른 마을로 이동하면서 걸리는 최소 시간을 구한다
 **/'''

def solution(N, road, K):
    # 도로 정보 표시
    MAX_TIME = 500001
    town_map = [[MAX_TIME for _ in range(N+1)] for _ in range(N+1)]
    for info in road:
        a, b, time = info
        town_map[a][b] = min(town_map[a][b], time)
        town_map[b][a] = min(town_map[b][a], time)

    # 1번 마을에서 n번 마을까지 가는데 걸리는 최소 시간 구하기
    min_time = [MAX_TIME for _ in range(N+1)]

    # 방문할 마을 목록
    queue = [1]
    min_time[1] = 0
    
    # 각 마을로 가는 최소 시간 구하기
    while queue:
        now = queue.pop(0)
        for town, time in enumerate(town_map[now]):
            if time != MAX_TIME:
                if min_time[town] > min_time[now] + time:
                    min_time[town] = min_time[now] + time
                    queue.append(town)
    
    # 배달 주문을 받을 수 있는 마을의 개수 구하기
    return sum([(1 if town <= K else 0) for town in min_time])