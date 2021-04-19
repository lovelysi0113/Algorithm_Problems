'''/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10950
*
* COMMENT:
* 첫번째 인자로 받은 수만큼 for문을 사용하여 반복작업하면 된다
**/'''

testcase = int(input())

for _ in range(0, testcase):
    a, b = map(int, input().split(' '))
    print(a + b)
