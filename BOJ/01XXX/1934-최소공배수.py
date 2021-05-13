'''/**
* ABOUT
*
* DATE: 2021-05-13
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1934
*
* COMMENT:
* A * B = GCD(최대공약수) * GCM(최소공배수) 은 항상 성립하는 공식이기에
* 최대공약수를 구하면 최소공배수도 쉽게 구할 수 있다
* 최대공약수를 구하는 유클리드 알고리즘은 다음과 같은 순서로 진행한다
* 1. rest = A % B : A을 B로 나눈 나머지를 rest라 할 때,
* 2. rest == 0 : rest가 0이면, B는 최대 공약수가 된다
* 3. rest != 0 : rest가 0이 아니라면, A = B, B = rest로 변경하고 1~3번 과정을 반복한다
**/'''

testcase = int(input())

for _ in range(testcase):
    a, b = map(int, input().split())

    if b > a:
        a, b = b, a

    # 유클리드 알고리즘
    A, B = a, b
    while B != 0:
        rest = A % B
        A = B
        B = rest

    answer = A * (a/A) * (b/A)
    print(int(answer))
