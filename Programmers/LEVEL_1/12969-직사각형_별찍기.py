'''/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12969
*
* COMMENT:
* 가로 길이 n만큼 '*' 만드는 것을 세로 길이 m만큼 반복한다
**/'''

a, b = map(int, input().strip().split(' '))
result = ('*' * a + '\n') * b
print(result)