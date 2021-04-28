'''/**
* ABOUT
*
* DATE: 2021-04-28
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2675
*
* COMMENT:
* 문자열 하나씩 주어진 수만큼 반복하여 결과값을 저장하는 문자열에 추가해주면 된다
**/'''

testcase = int(input())

for _ in range(0, testcase):
    repeat, string = input().split(' ')
    result = ''
    for ch in string:
        result += ch * int(repeat)
    print(result)
