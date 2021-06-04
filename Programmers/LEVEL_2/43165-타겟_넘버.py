'''/**
 * ABOUT
 * DATE: 2021-06-04
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/43165
 *
 * COMMENT:
 * [ 깊이/너비 우선 탐색(DFS/BFS) ]
 * numbers 배열 안의 수들을 더하거나 빼는 작업을 하여 최종 결과가 target이 되는 경우를 세면 된다
 * 재귀를 사용하여 다음 숫자를 더하는 경우, 다음 숫자를 빼는 경우로 나누어서 진행한 후
 * 모든 경우의 수에 대해 target이 몇 번 나오는지 확인한다
 **/'''

def solution(numbers, target):
    def make_target_num(idx, num):
        if idx == len(numbers):
            return 1 if num == target else 0
        return make_target_num(idx+1, num + numbers[idx]) + make_target_num(idx+1, num - numbers[idx])
    
    answer = make_target_num(0, 0)
    return answer