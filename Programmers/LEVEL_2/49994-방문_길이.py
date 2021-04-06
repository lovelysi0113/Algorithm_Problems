'''/**
* ABOUT
*
* DATE: 2021-04-06
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/49994
*
* COMMENT:
* 주어진 명령어대로 이동한다(pos 위치 변경)
* 이때 움직인 위치가 갈 수 있는 곳이면 지나간 길(path)를 저장해준다
* 즉, 현재위치-다음위치 와 다음위치-현재위치 를 저장한다
* 저장한 두 개의 path는 결국 같은 길이므로 같은 길이 두번 저장된 것과 같다
* 그러므로 지나온 길의 갯수를 출력하기 위해 저장된 공간의 요소 개수/2를 해야한다
**/'''


def solution(dirs):
    MOVING = {'U': [-1, 0], 'D': [1, 0], 'L': [0, -1], 'R': [0, 1]}

    visited_path = set()
    now_pos = (0, 0)
    for command in dirs:
        dx, dy = MOVING[command]
        next_pos = (now_pos[0] + dx, now_pos[1] + dy)
        if not is_valid(next_pos):
            continue
        path1 = (now_pos, next_pos)
        path2 = (next_pos, now_pos)
        visited_path.add(path1)
        visited_path.add(path2)
        now_pos = next_pos

    return len(visited_path) / 2


def is_valid(pos):
    x, y = pos
    return -5 <= x <= 5 and -5 <= y <= 5
