'''/**
* ABOUT
*
* DATE: 2021-05-08
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10872
*
* COMMENT:
* 재귀를 사용하여 문제를 해결할 수 있다
* num = 0이 될 때까지 num! = num * (num-1)!을 반복한다
**/'''


def Factorial(num):
    if num == 0:
        return 1
    return num * Factorial(num-1)


n = int(input())
print(Factorial(n))
