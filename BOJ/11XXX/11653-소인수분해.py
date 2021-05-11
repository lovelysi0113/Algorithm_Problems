'''/**
* ABOUT
*
* DATE: 2021-05-11
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11653
*
* COMMENT:
* 주어진 수가 num으로 나누어지면 num이 소인수라는 의미이다
* num = 2부터 시작하여 주어진 수가 1이 될때까지 반복한다(만약 num이 소인수가 아니라면 1 증가하여 반복)
**/'''

num = int(input())

answer = []
chk = 2
while num > 1:
    if num % chk == 0:
        answer.append(chk)
        num = num // chk
    else:
        chk += 1

for idx in answer:
    print(idx)
