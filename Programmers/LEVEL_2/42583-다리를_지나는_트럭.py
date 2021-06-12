'''/**
 * ABOUT
 *
 * DATE: 2021-06-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42583
 *
 * COMMENT:
 * [ 스택/큐 ]
 * 처음에 다리 길이만큼의 배열(bridge)을 만들어 트럭이 다리를 지나는 것을 구현한다
 * bridge에서 맨 앞을 제거한 후(1초 흐름, 앞으로 트럭이 한칸 앞으로 전진한 것을 의미)
 * 다음 트럭이 다리 위에 올라갈 수 있는지 확인한다(현재 다리 위 트럭의 총 무게 + 올라갈 트럭 무게 <= 다리가 견딜 수 있는 무게)
 * 모든 트럭이 다리를 지나갈 때까지 이 과정을 반복하여 총 걸린 시간을 구한다
 **/'''

from collections import deque

def solution(bridge_length, weight, truck_weights):
    bridge = deque([0] * bridge_length)
    sum_weight = 0
    
    time = 0
    while truck_weights:
        # 한 칸 앞으로 전진(1초 경과)
        time += 1
        truck = bridge.popleft()
        if truck != 0:
            sum_weight -= truck
        # 다음 트럭이 다리로 올라갈 수 있는지 확인
        if sum_weight + truck_weights[0] <= weight:
            new_truck = truck_weights.pop(0)
            sum_weight += new_truck
            bridge.append(new_truck)
        else:
            bridge.append(0)
    while sum_weight > 0:
        # 한 칸 앞으로 전진(1초 경과)
        time += 1
        truck = bridge.popleft()
        if truck != 0:
            sum_weight -= truck
            
    return time