'''/**
* ABOUT
*
* DATE: 2021-05-15
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/4153
*
* COMMENT:
* 피타고라스의 정리를 이용하여 주어진 삼각형이 직각삼각형인지 판단할 수 있다
* 피타고라스의 정리 - 가장 긴변의 제곱 = 나머지 두 변의 제곱의 합
**/'''

while True:
    triangle = list(map(int, input().split(' ')))
    triangle.sort()
    a, b, c = triangle
    if a == 0 and b == 0 and c == 0:
        break
    if a*a + b*b == c*c:
        # 직각 삼각형이 맞으면 right 출력
        print("right")
    else:
        # 직각 삼각형이 아니면 wrong 출력
        print("wrong")
