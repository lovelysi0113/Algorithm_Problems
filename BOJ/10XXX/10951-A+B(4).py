'''/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10951
*
* COMMENT:
* a, b의 입력값이 끝날 때까지 while문으로 반복 작업한다
* 입력값이 끝났는지 확인하기 위해 try-except문을 사용한다
* try문을 실행하다가 에러가 발생하면 except문으로 넘어간다
**/'''

while True:
    try:
        a, b = map(int, input().split(' '))
        print(a + b)
    except:
        break
