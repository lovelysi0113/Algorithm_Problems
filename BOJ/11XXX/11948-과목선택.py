'''/**
* ABOUT
*
* DATE: 2021-05-22
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11948
*
* COMMENT:
* 주어진 점수를 science(물리, 화학, 생물, 지구과학), society(역사, 지리)의 두그룹으로 나눈 후
* 각 그룹에서 가장 최소의 점수를 제외한 나머지 점수들의 합을 구하면 된다
**/'''

science = []
for _ in range(4):
    science.append(int(input()))
science.sort()

society = []
for _ in range(2):
    society.append(int(input()))
society.sort()

answer = sum(science[1:]) + society[1]
print(answer)
