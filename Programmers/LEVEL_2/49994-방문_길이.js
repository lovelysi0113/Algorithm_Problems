/**
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
**/

function solution(dirs) {
    const MOVING = { 'U': [-1, 0], 'D': [1, 0], 'L': [0, -1], 'R': [0, 1] };
    
    let visitedPath = {};
    let nowPos = [0, 0];
    for (let idx = 0; idx < dirs.length; idx++) {
        let [ dx, dy ] = MOVING[dirs[idx]];
        let nextPos = [nowPos[0] + dx, nowPos[1] + dy];
        if (!isValid(nextPos)) {
            continue;
        }
        let path1 = String([ ...nowPos, ...nextPos ]);
        let path2 = String([ ...nextPos, ...nowPos ]);
        visitedPath[path1] = path2;
        visitedPath[path2] = path1;
        nowPos = [ ...nextPos ];
    }
    return Object.keys(visitedPath).length / 2;
}

const isValid = (pos) => {
    let [ x, y ] = pos;
    return (-5 <= x && x <= 5) && (-5 <= y && y <= 5)
}