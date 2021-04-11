'''/**
* ABOUT
*
* DATE: 2021-04-11
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12982
*
* COMMENT:
* 작은 금액부터 더한 값이 예산보다 커지지 않는 최대 부서의 수를 구한다
**/'''


def solution(d, budget):
    # 각 부서에서 요청한 금액의 합 <= budget
    if sum(d) <= budget:
        return len(d)

    # 작은 금액부터 더해가기
    d.sort()
    answer = 0
    sum_money = 0
    for money in d:
        sum_money += money
        answer += 1
        if sum_money > budget:
            return answer - 1

    return answer
