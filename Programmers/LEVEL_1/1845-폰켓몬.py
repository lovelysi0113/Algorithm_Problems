'''/**
* ABOUT
*
* DATE: 2021-04-03
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/1845
*
* COMMENT:
* 가장 많은 종류의 폰켓몬 고르려먼 최대한 겹치지 않게 골라야 한다
* 즉, 총 몇 종류가 있는지 구하면 된다
**/'''


def solution(nums):
    phoneketmon = set(nums)
    return len(phoneketmon) if len(phoneketmon) < len(nums) / 2 else len(nums) / 2
