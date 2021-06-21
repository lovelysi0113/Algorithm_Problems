'''/**
 * ABOUT
 *
 * DATE: 2021-06-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/9375
 *
 * COMMENT:
 * 의상의 종류별로 각각 옷이 몇개 있는지 구한 다음에
 * 모든 경우의 수를 구한다(경우의 수 곱의 법칙)
 * 마지막에 -1을 하는 이유는 1가지 경우는 모든 옷을 안입을 때이므로 문제의 조건에 맞지않아 제외하는 것이다
 **/'''

test = int(input())

for _ in range(test):
    total = int(input())
    closet = {}
    for _ in range(total):
        cloth, kind = map(str, input().split(' '))
        if kind not in closet:
            closet[kind] = 1
        closet[kind] += 1
    
    answer = 1
    for num in closet.values():
        answer *= num
    
    print(answer - 1)