'''/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2562
*
* COMMENT:
* 입력으로 받은 수들을 비교하여 최댓값을 구하고 이때 최댓값이 몇번째로 입력된 수인지도 함께 출력해준다
* 이때 idx에 1을 더해주는 이유는 배열의 index는 0부터 시작하기 때문이다
**/'''

inputs = []
max_idx = 0
for idx in range(0, 9):
    num = int(input())
    inputs.append(num)
    if inputs[max_idx] < num:
        max_idx = idx

print(inputs[max_idx])
print(max_idx+1)
