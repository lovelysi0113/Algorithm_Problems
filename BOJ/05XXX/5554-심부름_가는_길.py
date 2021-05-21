'''/**
* ABOUT
*
* DATE: 2021-05-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/5554
*
* COMMENT:
* 이동시간을 모두 더한 결과값은 초단위이므로
* 결과값을 60으로 나누면 몫이 분, 나머지가 초가 된다
**/'''

seconds = 0
for _ in range(0, 4):
    seconds += int(input())

print(seconds // 60)
print(seconds % 60)
