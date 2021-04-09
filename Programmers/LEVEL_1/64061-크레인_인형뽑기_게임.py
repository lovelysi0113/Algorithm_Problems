'''/**
* ABOUT
*
* DATE: 2021-04-09
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/64061
*
* COMMENT:
* 인형 가져오는 것을 line 별로 관리하기 위해 board를 재정리하였다
* 그리고 문제에 나온 순서대로 인형을 하나씩 바구니에 옮긴 후 같은 모양일때 없애주었다
**/'''


def solution(board, moves):
    basket = []
    lastDoll = 0
    answer = 0

    # 각 라인에 인형이 어떻게 쌓여있는지 정리
    dolls = [[] for _ in range(len(board))]
    for line in board:
        for idx, doll in enumerate(line):
            if doll != 0:
                dolls[idx].append(doll)

    # move마다 일어나는 과정
    for move in moves:
        if dolls[move-1]:
            # 인형을 바구니로 옮긴다
            moveDoll = dolls[move-1].pop(0)
            # 같은 모양이 연속해서 쌓였는지 확인
            if moveDoll == lastDoll:
                answer += 2
                basket.pop()
                if basket:
                    lastDoll = basket[-1]
                else:
                    lastDoll = 0
            else:
                basket.append(moveDoll)
                lastDoll = moveDoll

    return answer
