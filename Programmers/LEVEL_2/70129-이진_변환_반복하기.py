'''/**
 * ABOUT
 *
 * DATE: 2021-06-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/70129
 *
 * COMMENT:
 * s가 '1'이 될 때까지 2단계를 계속 반복하면 된다
 * 1단계: 1인 경우에만 새로 저장한다(0인 경우는 제외하고 갯수만 셈)
 * 2단계: 1단계에서 나온 결과의 길이를 2진법으로 변환한다
 **/'''

def solution(s):
    cnt, zero = 0, 0;
    
    while s != '1':
        cnt += 1
        # 1단계
        result = ''
        for ch in s:
            if ch == '1':
                result += '1'
            else:
                zero += 1
        # 2단계
        s = format(len(result), 'b')
    
    return [cnt, zero]