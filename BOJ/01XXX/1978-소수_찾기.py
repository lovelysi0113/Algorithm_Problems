'''/**
* ABOUT
*
* DATE: 2021-05-09
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1978
*
* COMMENT:
* 에라토스테네스의 체를 사용하여 해당 숫자가 소수인지 판별할 수 있다
**/'''


def isPrime(num):
    if num < 2:
        return False
    if num == 2:
        return True
    for chk in range(2, int(num ** 0.5)+1):
        if num % chk == 0:
            return False
    return True


n = int(input())
num_list = list(map(int, input().split()))

answer = 0
for num in num_list:
    if isPrime(num):
        answer += 1
print(answer)
