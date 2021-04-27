'''/**
* ABOUT
*
* DATE: 2021-04-27
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11720
*
* COMMENT:
* 공백없이 입력된 숫자들은 하나의 문자열로 볼 수 있다
* 파이썬에서는 문자열은 이미 배열의 하나로 볼 수 있으므로 배열로 변환할 필요 없이 for문을 사용하여 모든 요소들의 합을 구하면 된다
**/'''

total = int(input())
nums = input()

answer = 0
for num in nums:
    answer += int(num)
print(answer)
