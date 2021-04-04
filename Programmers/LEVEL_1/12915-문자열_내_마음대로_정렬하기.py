'''/**
* ABOUT
*
* DATE: 2021-04-04
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12915
*
* COMMENT:
* n번째 인덱스를 비교하고 만약 같으면 전체 문자열을 비교하여 정렬한다
**/'''


def solution(strings, n):
    answer = []
    for idx in range(0, len(strings)):
        min_idx = idx
        for chk in range(idx+1, len(strings)):
            if strings[min_idx][n] > strings[chk][n]:
                min_idx = chk
            elif strings[min_idx][n] == strings[chk][n]:
                if strings[min_idx] > strings[chk]:
                    min_idx = chk
        strings[idx], strings[min_idx] = strings[min_idx], strings[idx]

    return strings
