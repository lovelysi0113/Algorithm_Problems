'''/**
 * ABOUT
 *
 * DATE: 2021-08-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14888
 *
 * COMMENT:
 * dfs를 사용하여 모든 수에 연산자를 넣어 계산해본다
 **/'''

N = int(input())
nums = list(map(int, input().split(' ')))
ops = list(map(int, input().split(' ')))

answer = [-1000000000, 1000000000]

def calculate(num1, num2, op):
    if op == 0: 
        return num1 + num2
    if op == 1:
        return num1 - num2
    if op == 2:
        return num1 * num2
    if op == 3:
        if num1 >= 0:
            return num1 // num2
        else:
            return -(-num1 // num2)

def dfs(result, idx, ops):
    if idx == N:
        answer[0] = max(answer[0], result)
        answer[1] = min(answer[1], result)
        return
    for op in range(0, 4):
        if ops[op] > 0:
            nextOps = ops[:]
            nextOps[op] -= 1
            dfs(calculate(result, nums[idx], op), idx + 1, nextOps)

dfs(nums[0], 1, ops)

print(answer[0])
print(answer[1])