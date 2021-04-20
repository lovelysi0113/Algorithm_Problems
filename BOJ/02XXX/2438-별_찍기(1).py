'''/**
* ABOUT
*
* DATE: 2021-04-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2438
*
* COMMENT:
* 별의 갯수를 주어지는 입력값 수까지 갯수를 늘려가며 출력해주면 된다
**/'''

num = int(input())

for idx in range(1, num+1):
    print('*' * idx)
