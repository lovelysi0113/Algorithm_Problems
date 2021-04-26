'''/**
* ABOUT
*
* DATE: 2021-04-26
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/4673
*
* COMMENT:
* n과 n의 각 자리수를 더하는 함수 d()를 구현한 다음
* 1~10000까지의 수를 d(n)으로 계산해보며 나온 결과값들을 저장한다
* 결과값들 중 나오지 않은 수가 셀프 넘버이므로 그것들을 출력하면 된다
**/'''


def d(n):
    answer = n
    while n > 0:
        answer += n % 10
        n = n // 10
    return answer


nums = [True] + [False for _ in range(10000)]
for num in range(1, 10001):
    chk = d(num)
    if chk <= 10000:
        nums[chk] = True

for idx in range(1, 10001):
    if not nums[idx]:
        print(idx)
