'''/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42862
*
* COMMENT:
* [ 탐욕법(Greedy) ]
* 한명씩 체육복 상황을 확인한다 (lost, reserve로 잃어버린 것과 빌릴 수 있는지 파악)
**/'''


def solution(n, lost, reserve):
    for num in range(1, n+1):
        if num in lost:
            if num in reserve:
                lost.remove(num)
                reserve.remove(num)
            elif (num-1) in reserve and (num-1) not in lost:
                lost.remove(num)
                reserve.remove(num-1)
            elif (num+1) in reserve and (num+1) not in lost:
                lost.remove(num)
                reserve.remove(num+1)

    return n - len(lost)

    '''1, 2, 5, 9에서 런타임 에러가 난다
    아마 for문을 너무 많이 돌아서인듯..!
    그리고 제한사항 5번을 체크할 수도 없다 힝ㅠㅠ
    
    # 현재 체육복을 가지고 있는 상황 체크하기
    haveSuit = [0] + [1] * n
    for num in lost:
        haveSuit[num] -= 1
    for num in reserve:
        haveSuit[num] += 1
    
    # 체육복을 빌려줄 수 있는지 확인
    for idx in range(1, n+1):
        if haveSuit[idx] == 0:
            if haveSuit[idx-1] > 1 and idx-1 >= 0:
                haveSuit[idx-1] -= 1
                haveSuit[idx] += 1
            elif haveSuit[idx+1] > 1 and idx+1 <= n:
                haveSuit[idx+1] -= 1
                haveSuit[idx] += 1
    
    # 체육수업을 들을 수 있는 학생 수
    return len(haveSuit) - haveSuit.count(0)
    '''
