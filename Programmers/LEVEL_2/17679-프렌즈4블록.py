'''/**
 * ABOUT
 * DATE: 2021-06-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17679
 *
 * COMMENT:
 * 우선 보드판을 split() 메서드를 사용하여 2차원 배열로 변경한다
 * 1. 보드를 처음부터 끝까지 돌면서 2 X 2를 찾는다
 * 2. 찾은 블록을 없앤다는 의미로 '0'으로 변경한다
 * 3. 위에 있는 블록을 내려 빈 공간을 채운다
 * 4. 1~3 과정을 반복하되 1번 과정에서 더이상 없앨 블록이 없으면 종료한다
 **/'''

def solution(m, n, board):
    board = [list(el) for el in board]

    # 블록 지우기
    while True:
        # 지울 수 있는 4개 블록 찾기
        delete = []
        for x in range(0, m-1):
            for y in range(0, n-1):
                if board[x][y] != 0 and board[x][y] == board[x][y+1] == board[x+1][y] == board[x+1][y+1]:
                    delete.append([x, y])
        if not delete:
            return len(list(filter(lambda x: x == 0, sum(board, []))))
        else:
            # 없앤 블록 표시
            for el in delete:
                x, y = map(int, el)
                board[x][y] = 0
                board[x][y+1] = 0
                board[x+1][y] = 0
                board[x+1][y+1] = 0
        # 빈 공간 채우기
        for x in range(m-1, 0, -1):
            chk = list(filter(lambda x: x == 0, board[x]))
            if chk:
                for y in range(0, n):
                    for move in range(x-1, -1, -1):
                        if board[x][y] == 0 and board[move][y] != 0:
                            board[x][y] = board[move][y]
                            board[move][y] = 0
                            break