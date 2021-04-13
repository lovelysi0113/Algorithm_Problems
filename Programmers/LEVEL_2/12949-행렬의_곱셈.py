'''/**
* ABOUT
*
* DATE: 2021-04-13
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12949
*
* COMMENT:
* 행렬의 곱셈이 무엇인지, 어떻게 하는것인지 알면 쉽게 코드를 작성할 수 있다
* (참조 사이트: https://ko.wikipedia.org/wiki/%ED%96%89%EB%A0%AC_%EA%B3%B1%EC%85%88)
**/'''


def solution(arr1, arr2):
    # 행렬 A와 B의 곱 = A의 i번째 행과 B의 j번째 열의 스칼라곱
    # A(m x n) X B(n x p) = C(m x p)
    m = len(arr1)
    n = len(arr1[0])
    p = len(arr2[0])

    answer = []

    for i in range(0, m):
        line = []
        for j in range(0, p):
            total = 0
            for chk in range(0, n):
                total += arr1[i][chk] * arr2[chk][j]
            line.append(total)
        answer.append(line)

    return answer
