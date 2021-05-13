'''/**
* ABOUT
*
* DATE: 2021-05-13
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1037
*
* COMMENT:
* 진짜 약수들을 오름차순으로 정렬한 뒤 최솟값과 최댓값을 곱하면 N이 나온다
**/'''

total = int(input())
numList = list(map(int, input().split(' ')))

numList.sort()
print(numList[0] * numList[-1])
