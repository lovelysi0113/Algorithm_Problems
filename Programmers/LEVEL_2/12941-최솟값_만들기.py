'''/**
* ABOUT
*
* DATE: 2021-04-23
* AUTHOR: lovelysi0113
*
* URL: https: // programmers.co.kr/learn/courses/30/lessons/12941
*
* COMMENT:
* 두 배열의 곱이 가장 최소가 나오려면 한 배열의 최댓값과 한 배열의 최솟값이 곱해져야 한다
* 그래서 하나는 오름차순, 다른 하나는 내림차순으로 정렬한 후
* 각각 같은 인덱스의 요소들의 곱을 더해준다
**/'''

def solution(A, B):
    answer = 0

    A.sort()
    B.sort(reverse=True)

    for idx in range(0, len(A)):
        answer += A[idx] * B[idx]

    return answer
