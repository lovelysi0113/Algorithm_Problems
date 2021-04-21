'''/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1546
*
* COMMENT:
* 입력받은 점수들 중 최댓값을 구한 다음 문제에 나온 새로운 점수 공식(점수/M * 100)으로 원래 점수를 수정한다
* 그리고 새로운 점수들의 평균값을 구하면 된다
**/'''

total = int(input())
scores = list(map(int, input().split(' ')))

max_score = max(scores)
for idx in range(0, total):
    scores[idx] = scores[idx] / max_score * 100

print(sum(scores) / total)
