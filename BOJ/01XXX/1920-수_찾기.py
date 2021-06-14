'''/**
 * ABOUT
 *
 * DATE: 2021-06-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1920
 *
 * COMMENT:
 * Binary Search를 사용하여 A 안에 해당 숫자가 있는지 찾으면 된다
 * 이진 탐색: 오름차순으로 정렬된 배열에서 원하는 숫자(target)를 찾는 알고리즘
 * 1. 배열 전체의 중간값을 target과 비교 -> 일치하면 탐색 종료
 * 2. target < 중간값 -> 배열의 왼쪽 부분 선택
 * 3. target > 중간값 -> 배열의 오른쪽 부분 선택
 * 4. 선택한 배열에서 다시 1~3번 과정 반복
 **/'''

total = int(input())
numbers = list(map(int, input().split(' ')))
numbers.sort()

testcase = int(input())
targets = list(map(int, input().split(' ')))

# Binary Search를 사용하여 해당 숫자가 있는지 찾기
for target in targets:
    is_find = False
    mid = -1
    start = 0
    end = total - 1
    while start <= end:
        mid = (start + end) // 2
        if target == numbers[mid]:
            # A 안에 수 존재함
            is_find = True
            print(1)
            break
        elif target < numbers[mid]:
            end = mid - 1
        else:
            start = mid + 1
    # A 안에 수 존재하지 않음
    if not is_find:
        print(0)