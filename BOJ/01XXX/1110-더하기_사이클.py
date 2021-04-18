'''/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1110
*
* COMMENT:
* 새로운 수 = {
*    십의 자리: 원래 수의 일의 자리
*    일의자리: 원래 수의 십의 자리 + 원래 수의 일의 자리 의 결과값의 일의 자리
* } 이다
* 이 규칙에 맞춰서 새로운 수가 처음 입력값이 될 때까지 몇번 반복하는지 계산하면 된다
**/'''

original = int(input())

num = -1
count = 0
while num != original:
    if num == -1:
        num = original
    ten = num // 10
    one = num % 10
    num = one * 10 + ((ten + one) % 10)
    count += 1

print(count)
