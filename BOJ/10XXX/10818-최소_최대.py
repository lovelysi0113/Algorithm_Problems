'''/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10818
*
* COMMENT:
* 배열 안의 있는 수들을 확인하고 비교하여 최댓값과 최솟값을 찾으면 된다
**/'''

total = int(input())
nums = list(map(int, input().split(' ')))

min_num = nums[0]
max_num = nums[0]
for num in nums:
    if num < min_num:
        min_num = num
    if num > max_num:
        max_num = num

print(min_num, max_num)
