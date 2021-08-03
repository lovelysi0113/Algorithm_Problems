'''/**
 * ABOUT
 *
 * DATE: 2021-08-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14501
 *
 * COMMENT:
 * memorization과 재귀를 사용하여 퇴사 전까지 얻을 수 있는 최대 수익을 구해준다
 **/'''

N = int(input())

schedule = []
for _ in range(N):
    schedule.append(list(map(int, input().split(' '))))

profit = [-1] * N

# 특정 날에 얻을 수 있는 최대 수익을 구하는 함수
def getMaxProfit(day):
    # 퇴사일 이후인 경우
    if day >= N:
        return 0
    # 이미 값을 구한 경우
    if profit[day] != -1:
        return profit[day]
    
    T, P = schedule[day]
    # 두가지 경우 중 최대 수익 선택
    # 1. 오늘 일하지 않고 다음날 일하는 경우(nextWork)
    nextWork = getMaxProfit(day+1)
    # 2. 오늘 일하는 경우(todayWork)
    todayWork = 0
    # 2-1. 퇴사 전까지 일 마침 (이익 P 추가)
    if day + T <= N:
        todayWork = getMaxProfit(day+T) + P
    # 2-2. 퇴사 전까지 일 마치지 못함 (이익 얻지 못함)
    else:
        todayWork = getMaxProfit(day+T)
    profit[day] = max(nextWork, todayWork)
    return profit[day]
    
# 1~N일까지 일하면서 얻을 수 있는 최대 수익 구하기
print(getMaxProfit(0))