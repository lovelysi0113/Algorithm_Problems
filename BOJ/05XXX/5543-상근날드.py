'''/**
 * ABOUT
 *
 * DATE: 2021-06-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5543
 *
 * COMMENT:
 * 주어진 점수를 hamburger(상덕버거, 중덕버거, 하덕버거), drink(콜라, 사이다)의 두그룹으로 나눈 후
 * 각 그룹에서 최솟값을 찾아 더한 후 50월을 빼면 된다
 **/'''

hamburger = []
for _ in range(3):
    hamburger.append(int(input()))
hamburger.sort()

drink = []
for _ in range(2):
    drink.append(int(input()))
drink.sort()

answer = hamburger[0] + drink[0] - 50
print(answer)