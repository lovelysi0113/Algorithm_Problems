'''/**
* ABOUT
*
* DATE: 2021-05-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2475
*
* COMMENT:
* 검증수는 고유번호의 처음 5자리에 들어가는 5개의 숫자를 각각 제곱한 수의 합을 10으로 나눈 나머지이다.
**/'''

num_list = list(map(int, input().split(' ')))

answer = 0
for num in num_list:
    answer += num * num

print(answer % 10)
