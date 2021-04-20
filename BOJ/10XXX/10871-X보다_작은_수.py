'''/**
* ABOUT
*
* DATE: 2021-04-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10871
*
* COMMENT:
* 주어지는 입력값 포맷대로 값들을 저장한 후 for문으로 비교하며 x보다 작은 수들만 출력해주면 된다
**/'''

total, num = map(int, input().split(' '))
nums = input().split(' ')

answer = []
for idx in range(0, total):
    if int(nums[idx]) < num:
        answer.append(nums[idx])

print(' '.join(answer))
