'''/**
* ABOUT
*
* DATE: 2021-05-25
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/77484
*
* COMMENT:
* 당첨 가능한 최고 순위는 0이 모두 맞는 숫자인 경우, 최저 순위는 0이 모두 틀린 숫자인 경우이다
* 0이 아닌 숫자 중 당첨이 확실한 숫자들의 갯수와 0의 갯수를 활용하여 최고 순위, 최저 순위를 구할 수 있다
**/'''


def solution(lottos, win_nums):
    zero = 0
    correct = 0
    for num in lottos:
        if num == 0:
            zero += 1
        elif num in win_nums:
            correct += 1

    high = 7 - (correct + zero)
    low = 7 - (correct)
    high = 6 if high >= 6 else high
    low = 6 if low >= 6 else low
    return [high, low]
