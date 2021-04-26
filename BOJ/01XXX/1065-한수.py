'''/**
* ABOUT
*
* DATE: 2021-04-26
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1065
*
* COMMENT:
* 문제에서 정의된 '한수'처럼 각 자리수가 등차수열인지 확인하는 함수 hansu()를 구현한다
* 그리고 1~input까지 모두 hansu()에 넣어서 그 숫자가 '한수'인지 확인한다
**/'''

max_num = int(input())


def hansu(num):
    if num < 10:
        return True
    chk = []
    while num > 0:
        chk.append(num % 10)
        num = num // 10
    differ = chk[0] - chk[1]
    for idx in range(1, len(chk)-1):
        if chk[idx] - chk[idx+1] != differ:
            return False
    return True


answer = 0
for num in range(1, max_num+1):
    if hansu(num):
        answer += 1

print(answer)
