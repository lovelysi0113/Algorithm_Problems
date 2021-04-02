'''/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/72411
*
* COMMENT:
* course에 나온 갯수별로 각각 주문이 가장 많은 메뉴 조합을 찾는다
* 손님이 시킨 메뉴에서 나올 수 있는 모든 조합을 구한 후 해당 조합이 몇번 나오는지 센다
**/'''

import itertools
import collections


def solution(orders, course):
    answer = []

    # 단품메뉴 갯수별로 계산하기
    for num in course:
        comb = []
        for order in orders:
            order = ''.join(sorted(order))
            # 단품메뉴 조합
            comb += list(map(''.join, itertools.combinations(order, num)))

        # 겹치는 메뉴조합이 많은 순으로 정렬
        comb_counter = dict(collections.Counter(comb))
        comb_counter = sorted(comb_counter.items(),
                              reverse=True, key=lambda item: item[1])

        max_key = 1
        for key, val in comb_counter:
            # 겹치는 횟수가 1번일 경우 제외
            if val == 1:
                break
            if max_key < val:
                max_key = val
                answer.append(key)
            elif max_key == val:
                answer.append(key)
            else:
                break

    # 사전순으로 메뉴 정렬
    return sorted(answer)
