'''/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/60057
*
* COMMENT:
* 1~len(s) 갯수만큼 문자열을 압축해보고 그 중 가장 짧은 길이의 압축된 문자열을 구한다
**/'''


def solution(s):
    MAX_COMP = len(s) + 1
    answer = 10000

    # 1 ~ MAX_COMP 갯수만큼 문자열을 압축해보기
    for rpt_cnt in range(1, MAX_COMP):
        chk_answer = ''
        chk_word = ''
        cnt_word = 0
        for idx in range(0, len(s)+1, rpt_cnt):
            # 압축 시작하기
            if chk_word == '':
                chk_word = s[idx: idx+rpt_cnt]
                cnt_word += 1
            # 겹치는 문자열 있는지 확인
            elif chk_word == s[idx: idx+rpt_cnt]:
                cnt_word += 1
            # 문자열을 모두 확인했을 때
            elif idx == len(s):
                if cnt_word == 1:
                    chk_answer += chk_word
                else:
                    chk_answer += str(cnt_word) + chk_word
            # 반복되지 않을때
            else:
                if cnt_word == 1:
                    chk_answer += chk_word
                else:
                    chk_answer += str(cnt_word) + chk_word
                chk_word = s[idx: idx+rpt_cnt]
                cnt_word = 1
        # 남은 자투리 문자열도 추가해주기
        rst = len(s) % rpt_cnt
        chk_answer += s[len(s)-rst:]
        # 현재 압축한 문자열 길이가 최소길이인지 비교
        if len(chk_answer) < answer:
            answer = len(chk_answer)

    return answer
