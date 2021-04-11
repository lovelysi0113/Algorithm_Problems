'''/**
* ABOUT
*
* DATE: 2021-04-11
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/17682
*
* COMMENT:
* dartResult을 점수, 보너스, 옵션으로 나눈 후, 문제에 나온대로 점수를 계산하면 된다
**/'''


def solution(dartResult):
    score = [0, 0, 0, 0]
    stage = 0

    now_idx = 0
    while now_idx < len(dartResult):
        now = dartResult[now_idx]
        # 숫자
        if now in '0123456789':
            if now == '1' and dartResult[now_idx+1] == '0':
                now = '10'
                now_idx += 1
            stage += 1
            score[stage] = int(now)
        # 보너스
        elif now in 'SDT':
            if now == 'D':
                score[stage] *= score[stage]
            elif now == 'T':
                score[stage] *= score[stage] * score[stage]
        # 옵션
        elif now in '*#':
            if now == '*':
                score[stage] *= 2
                score[stage-1] *= 2
            elif now == '#':
                score[stage] *= -1
        now_idx += 1

    return sum(score)
