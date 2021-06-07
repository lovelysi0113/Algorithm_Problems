'''/**
 * ABOUT
 *
 * DATE: 2021-06-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17680
 *
 * COMMENT:
 * 문제에서 등장한 용어의 의미는 다음과 같다.
 * LRU 알고리즘: 가장 오랫동안 참조되지 않은 데이터를 교체하는 기법
 * cache: CPU가 빠른 속도로 데이터를 주고 받을 수 있도록 도와주는 메모리(데이터를 임시 보관 & 관리)
 * cache hit: CPU가 참조하고자 하는 데이터가 cache에 존재하고 있는 경우
 * cache miss: CPU가 참조하고자 하는 데이터가 cache에 존재하지 않는 경우
 * 이를 토대로 문제에서 요구하는 대로 도시이름 배열을 순서대로 처리하면 된다
 * 우선 LRU 알고리즘을 구현하기 위해 queue를 만들어서 cache(데이터)를 관리한다
 * cache에 해당 도시가 없으면(cache miss) queue에 추가해주고 이때 사이즈가 cacheSize를 초과하면 맨 앞의 데이터를 제거한다
 * cache에 해당 도시가 있으면(cache hit) queue에 있는 해당 도시 데이터를 맨 뒤로 위치를 변경해준다(가장 최근에 사용됨을 표시)
 * 이 과정을 반복한 후 걸리는 총 실행시간을 계산하면 된다
 **/'''

def solution(cacheSize, cities):
    if cacheSize == 0:
        return 5 * len(cities)
    
    total = 0
    queue = []
    for city in cities:
        city = city.lower()
        if city in queue:
            # cache hit
            total += 1
            queue.remove(city)
            queue.append(city)
        else:
            # cache miss
            total += 5
            if len(queue) == cacheSize:
                queue.pop(0)
            queue.append(city)
    
    return total