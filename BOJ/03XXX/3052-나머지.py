'''/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/3052
*
* COMMENT:
* 입력받은 수들을 42로 나눈 나머지를 구한 다음 answer배열에 넣어준다
* 이때, answer는 set()으로 이미 들어간 수와 겹치지 않는 값들만 들어가게 된다
* 그리고 answer에 몇 개의 수가 들어가있는지 갯수를 세주면 된다
**/'''

answer = set()
for _ in range(0, 10):
    num = int(input())
    answer.add(num % 42)

print(len(answer))
