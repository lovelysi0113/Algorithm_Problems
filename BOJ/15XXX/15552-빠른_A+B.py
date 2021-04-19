'''/**
* ABOUT
*
* DATE: 2021-04-19
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/15552
*
* COMMENT:
* python에서는 input대신 sys.stdin.readline의 방식이 더 빠르다
**/'''

import sys

testcase = int(input())
for _ in range(0, testcase):
    a, b = map(int, sys.stdin.readline().split(' '))
    print(a + b)
