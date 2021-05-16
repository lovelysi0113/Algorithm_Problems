'''/**
* ABOUT
*
* DATE: 2021-05-16
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2981
*
* COMMENT:
* 종이에 적은 수들의 집합을 arr이라고 했을 때(오름차순)
* 각 수를 M으로 나눈 나머지는 다음과 같다
* arr[0] % M = arr[0] - (arr[0]/M) * M
* arr[1] % M = arr[1] - (arr[1]/M) * M
* ...
* arr[n] % M = arr[n] - (arr[n]/M) * M
* 문제에서 각 수를 M으로 나눈 나머지가 모두 같아야 하므로 이를 토대로 정리해보면
* arr[1] - arr[0] = (arr[1]/M - arr[0]/M) * M
* arr[2] - arr[1] = (arr[2]/M - arr[1]/M) * M
* ...
* arr[n] - arr[n-1] = (arr[n]/M - arr[n-1]/M) * M
* 즉, arr에서 인접한 수의 차이값들이 M의 배수가 된다는 사실을 알 수 있다
* 따라서 차이값들의 최대공약수 M와 M의 모든 약수(1 제외)가 가능한 M이 된다
**/'''

import math


def gcd(a, b):  # 최대공약수 구하기
    if b == 0:
        return a
    else:
        return gcd(b, a % b)


total = int(input())
nums = []
for _ in range(0, total):
    nums.append(int(input()))
nums.sort()

# 인접한 수들의 차이값 구하기
differs = []
for idx in range(1, total):
    differs.append(nums[idx] - nums[idx-1])

# 차이값들의 최대공약수 구하기
M = differs[0]
for idx in range(1, total-1):
    M = gcd(M, differs[idx])

# 1을 제외한 M의 모든 약수 구하기
answer = [M]
for num in range(2, int(math.sqrt(M))+1):
    if (M % num == 0):
        answer.append(num)
        if (num != M / num):
            answer.append(M // num)

# 오름차순 정렬로 출력
answer.sort()
print(' '.join(list(map(str, answer))))
