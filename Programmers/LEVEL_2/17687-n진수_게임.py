'''/**
 * ABOUT
 *
 * DATE: 2021-06-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17687
 *
 * COMMENT:
 * 실제로 0부터 숫자 하나씩 증가해가며 n진법으로 변경한 값을 구한다
 * 튜브가 대답해야하는 숫자의 개수(m * t)만큼 n진법으로 변경한 값을 담은 배열을 만든 후
 * 튜브의 차례에 대답해야하는 수만 골라 답을 구할 수 있다
 **/'''

def solution(n, t, m, p):
    game = '0'
    
    num = 1
    ALPHA = ['A', 'B', 'C', 'D', 'E', 'F']
    while len(game) < m * t:
        now_num = num
        chg_num = ''
        # 현재 숫자를 n진법으로 변환
        while now_num > 0:
            res = now_num % n
            if res >= 10:
                chg_num += ALPHA[res % 10]
            else:
                chg_num += str(res)
            now_num //= n
        game += chg_num[::-1]
        num += 1
        
    answer = ''
    for idx in range(0, m * t):
        if idx % m == p - 1:
            answer += game[idx]
    return answer