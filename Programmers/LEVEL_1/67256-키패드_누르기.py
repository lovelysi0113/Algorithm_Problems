'''/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/67256
*
* COMMENT:
* 문제에 나온 순서대로 한단계씩 코드를 작성하면 된다
**/'''


def solution(numbers, hand):
    answer = ''
    now_left = 10  # '*'
    now_right = 11  # '#'
    DISTANCE = [[3, 2, 1, 0],
                [1, 2, 3, 4], [0, 1, 2, 3], [1, 2, 3, 4],
                [2, 1, 2, 3], [1, 0, 1, 2], [2, 1, 2, 3],
                [3, 2, 1, 2], [2, 1, 0, 1], [3, 2, 1, 2],
                [4, 3, 2, 1], [4, 3, 2, 1]]

    for number in numbers:
        # 1. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력
        if number in [1, 4, 7]:
            answer += 'L'
            now_left = number
        # 2. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력
        if number in [3, 6, 9]:
            answer += 'R'
            now_right = number
        # 3. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력
        if number in [2, 5, 8, 0]:
            dis_left = DISTANCE[now_left][[2, 5, 8, 0].index(number)]
            dis_right = DISTANCE[now_right][[2, 5, 8, 0].index(number)]
            if dis_left < dis_right:
                answer += 'L'
                now_left = number
            elif dis_left > dis_right:
                answer += 'R'
                now_right = number
            elif dis_left == dis_right:
                if hand == 'left':
                    answer += 'L'
                    now_left = number
                elif hand == 'right':
                    answer += 'R'
                    now_right = number

    return answer
