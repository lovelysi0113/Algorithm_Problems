'''/**
 * ABOUT
 *
 * DATE: 2021-06-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/67257
 *
 * COMMENT:
 * 우선 주어진 수식을 숫자와 연산자로 분리한다.
 * 나올 수 있는 연산자의 우선순위는 6가지이므로 각각의 경우에 대해 모두 계산해보고 그중 절대값이 가장 큰 값을 찾으면 된다
 * 이때 i번째 연산자로 계산하기 위해 i번째 숫자와 i+1번째 숫자를 사용한다
 * 이미 계산한 숫자, 연산자는 pop() 함수를 사용하여 없애준다
 **/'''

def solution(expression):
    nums = []
    ops = []
    
    # 수식에서 연산자, 숫자 분리
    num = ''
    for ch in expression:
        if ch in '+-*':
            ops.append(ch)
            nums.append(int(num))
            num = ''
        else:
            num += ch
    nums.append(int(num))
    
    # 연산자 우선순위 목록(연산자 조합)
    priority_ops = [['+', '-', '*'], ['+', '*', '-'], ['-', '+', '*'], ['*', '+', '-'], ['-', '*', '+'], ['*', '-', '+']]
    
    # 연산자 조합에서 가장 큰 결과값 구하기
    answer = 0
    for el in priority_ops:
        chk_nums = nums[:]
        chk_ops = ops[:]
        idx = 0
        for op in el:
            while idx < len(chk_ops):
                if op == chk_ops[idx]:
                    chk_nums[idx] = calculator(chk_nums[idx], chk_ops[idx], chk_nums[idx+1])
                    chk_nums.pop(idx+1)
                    chk_ops.pop(idx)
                    idx -= 1
                idx += 1
            idx = 0
        answer = max(abs(chk_nums[0]), answer)
    
    return answer

# 계산 함수
def calculator(num1, op, num2):
    if op == '+':
        return num1 + num2
    if op == '-':
        return num1 - num2
    if op == '*':
        return num1 * num2