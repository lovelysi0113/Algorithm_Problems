'''/**
* ABOUT
*
* DATE: 2021-05-22
* AUTHOR: lovelysi0113
*
* URL: https: // www.acmicpc.net/problem/10707
*
* COMMENT:
* 문제에서 주어진대로 X사와 Y사의 수도요금을 계산한 후 더 싼 요금을 찾으면 된다
**/'''

A = int(input())
B = int(input())
C = int(input())
D = int(input())
P = int(input())

X = A * P
Y = B if P <= C else B + (P-C) * D
print(min(X, Y))
