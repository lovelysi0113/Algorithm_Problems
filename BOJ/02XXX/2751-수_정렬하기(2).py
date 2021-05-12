'''/**
* ABOUT
*
* DATE: 2021-05-12
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2751
*
* COMMENT:
* 수를 하나씩 받아서 배열에 넣은다음, sort해주면 된다(시간 복잡도: O(nlogn))
* 시간을 더 줄이기 위해 input() 대신 sys.stdin.readline()을 사용할 수 있다
**/'''

import sys

nums = int(input())

arr = []
for _ in range(0, nums):
    arr.append(int(sys.stdin.readline()))

arr.sort()

for el in arr:
    print(el)
