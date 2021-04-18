'''/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2753
*
* COMMENT:
* 윤년인 조건은 4의 배수인데 100의 배수가 아니거나 4의 배수인데 400의 배수여야 한다
* 이 조건을 if문에서 사용하면 된다
**/'''

year = int(input())

if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
    print(1)
else:
    print(0)
