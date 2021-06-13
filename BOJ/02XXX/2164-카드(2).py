'''/**
 * ABOUT
 *
 * DATE: 2021-06-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2164
 *
 * COMMENT:
 * 문제에서 나온 대로 카드가 1장 남을 때까지 카드를 버리고 옮기는 작업을 반복하면 된다
 * 1. 카드를 버림 -> top 위치를 다음으로 이동
 * 2. 맨 위 카드를 아래로 옮김 -> top 위치의 카드를 push() 메소드로 배열 끝에 추가하고 top 위치를 다음으로 이동
 **/'''

N = int(input())

# 처음에 카드가 1~N까지 순서대로 놓여져 있음
# 제일 위에 있는 카드 = card 배열의 인덱스 0에 있는 카드
card = [idx for idx in range(1, N+1)]

# 카드가 한 장 남을 때까지 반복
top = 0
while top < len(card) - 1:
    # 제일 위에 있는 카드를 바닥에 버린다
    top += 1
    # 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다
    card.append(card[top])
    top += 1

print(card[top])