'''/**
* ABOUT
*
* DATE: 2021-05-23
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10773
*
* COMMENT:
* 현재 수가 숫자면 stack에 넣고(push), 0이면 stack에서 뺀다(pop)
* 모든 작업이 끝난 후, stack에 남아있는 모든 수의 합을 구하면 된다
**/'''

cnt = int(input())

account = []
for _ in range(cnt):
    num = int(input())
    if num == 0:
        account.pop()
    else:
        account.append(num)

print(sum(account))
