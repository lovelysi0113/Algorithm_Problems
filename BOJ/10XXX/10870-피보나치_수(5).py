'''/**
* ABOUT
*
* DATE: 2021-05-08
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10870
*
* COMMENT:
* 재귀를 사용하여 문제를 해결할 수 있다
* num = 0, 1이 될 때까지 Fibo(num) = Fibo(num-1) + Fibo(num-2)!을 반복한다
**/'''


def Fibonacci(num):
    if num <= 1:
        return num
    return Fibonacci(num-1) + Fibonacci(num-2)


n = int(input())
print(Fibonacci(n))
