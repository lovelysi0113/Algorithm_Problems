'''/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2577
*
* COMMENT:
* 우선 0~9까지의 숫자의 갯수를 담는 배열(count)를 하나 만든다
* a, b, c의 곱의 각 자릿수의 숫자에 따라 해당 숫자의 갯수를 1 늘려준다
* 그리고 각 숫자가 몇개 있는지 하나씩 출력해주면 된다
**/'''

a = int(input())
b = int(input())
c = int(input())
total = a * b * c

count = [0 for _ in range(0, 10)]
while total > 0:
    count[total % 10] += 1
    total = total // 10

for cnt in count:
    print(cnt)
