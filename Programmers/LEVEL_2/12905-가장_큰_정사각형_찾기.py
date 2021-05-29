'''/**
* ABOUT
*
* DATE: 2021-05-29
* AUTHOR: lovelysi0113
*
* URL: https: // programmers.co.kr/learn/courses/30/lessons/12905
*
* COMMENT:
* (0, 0)부터 차례대로 방문하면서 현재 위치에서 나올 수 있는 가장 큰 정사각형의 길이를 구한다
* 현재 위치가 1일때, 현재 위치의 위, 왼쪽, 왼쪽 상단을 확인해서 2 X 2 정사각형을 만들 수 있는지 확인한다
* 위, 왼쪽, 왼쪽 상단의 숫자에서 가장 작은 수 + 1이 현재 위치에서 만들 수 있는 가장 큰 정사각형의 길이가 된다
* 끝까지 방문한 후 가장 큰 수를 찾는다
* 이때 가장 큰 수는 1로 이루어진 가장 큰 정사각형의 길이가 된다
**/'''


def solution(board):
    max_len = 0
    len_x = len(board)
    len_y = len(board[0])

    def is_valid(x, y):
        return (0 <= x and x < len_x) and (0 <= y and y < len_y)

    for x in range(len_x):
        for y in range(len_y):
            if is_valid(x-1, y) and is_valid(x, y-1) and is_valid(x-1, y-1):
                if board[x][y] == 1:
                    board[x][y] = min(board[x-1][y], board[x]
                                      [y-1], board[x-1][y-1]) + 1
            max_len = max(max_len, board[x][y])

    return max_len * max_len
