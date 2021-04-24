'''/**
* ABOUT
*
* DATE: 2021-04-24
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2750
*
* COMMENT:
* 수를 하나씩 받아서 배열에 넣은다음, sort해주면 된다(시간 복잡도: O(n^2))
**/'''

nums = int(input())

arr = []
for _ in range(0, nums):
    arr.append(int(input()))
arr.sort()

for el in arr:
    print(el)
