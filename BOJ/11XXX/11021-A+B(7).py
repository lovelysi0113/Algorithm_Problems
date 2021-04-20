'''/**
* ABOUT
*
* DATE: 2021-04-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11021
*
* COMMENT:
* 문제에서 요구하는 출력 형식에 맞춰서 a + b의 값을 출력해주면 된다
**/'''

testcase = int(input())

for test in range(1, testcase+1):
    a, b = map(int, input().split(' '))
    print('Case #{0}: {1}'.format(test, a + b))
