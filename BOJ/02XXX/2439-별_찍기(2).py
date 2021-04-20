'''/**
* ABOUT
*
* DATE: 2021-04-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2439
*
* COMMENT:
* 공백 갯수와 별의 갯수를 주어지는 입력값 수만큼 출력해주면 된다
**/'''

num = int(input())

for idx in range(1, num+1):
    print('{0}{1}'.format(' ' * (num-idx), '*' * idx))
