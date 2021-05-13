'''/**
* ABOUT
*
* DATE: 2021-05-13
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/5086
*
* COMMENT:
* 두 수 중 큰 수에서 작은 수를 나누어 나머지가 0이면 배수/약수이다
**/'''

while True:
    a, b = map(int, input().split(' '))
    if a == 0 and b == 0:
        break
    if a > b:
        if a % b == 0:
            # 첫 번째 숫자가 두 번째 숫자의 배수라면 multiple 출력
            print('multiple')
        else:
            # 둘 다 아니라면 neither 출력
            print('neither')
    else:
        if b % a == 0:
            # 첫 번째 숫자가 두 번째 숫자의 약수라면 factor 출력
            print('factor')
        else:
            # 둘 다 아니라면 neither 출력
            print('neither')
