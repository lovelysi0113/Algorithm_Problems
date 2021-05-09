'''/**
* ABOUT
*
* DATE: 2021-05-09
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2581
*
* COMMENT:
* 에라토스테네스의 체를 사용하여 해당 숫자가 소수인지 판별할 수 있다
**/'''


def is_prime(num):
    if num < 2:
        return False
    if num == 2:
        return True
    for chk in range(2, int(num ** 0.5)+1):
        if num % chk == 0:
            return False
    return True


num1 = int(input())
num2 = int(input())

answer = 0
min_prime = 0
for num in range(num1, num2+1):
    if is_prime(num):
        if answer == 0:
            min_prime = num
        answer += num

if answer == 0:
    print(-1)
else:
    print(answer)
    print(min_prime)
