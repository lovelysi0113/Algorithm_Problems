'''/**
* ABOUT
*
* DATE: 2021-05-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/3046
*
* COMMENT:
* 두 숫자 R1과 R2가 있을 때, 두 수의 평균 S는 (R1+R2)/2와 같다
* 따라서 R2를 구하려면 (S*2)-R1을 하면 된다
**/'''

R1, S = map(int, input().split(' '))
R2 = S * 2 - R1

print(R2)
