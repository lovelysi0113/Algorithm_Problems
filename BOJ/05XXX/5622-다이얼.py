'''/**
* ABOUT
*
* DATE: 2021-04-29
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/5622
*
* COMMENT:
* 각 대문자마다 해당하는 숫자를 저장해놓은 다음(DIAL)
* 입력값으로 주어진 대문자를 하나씩 확인하며 각 대문자가 숫자 몇을 가리키는지 계산한다
* 숫자 1을 누르는데 2초가 걸리고 숫자 1이 증가할수록 1초가 추가되므로
* 숫자 n을 누르는데 총 n+1초가 걸린다
* 이를 생각하여 다이얼을 누르는데 총 걸리는 시간을 계산하면 된다
**/'''

dials = list(input())

DIAL = ['', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']

answer = 0
for dial in dials:
    for (idx, chk) in enumerate(DIAL):
        if dial in chk:
            answer += idx + 1

print(answer)
