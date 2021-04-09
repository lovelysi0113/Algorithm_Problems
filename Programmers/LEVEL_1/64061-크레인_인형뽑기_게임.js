/**
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
**/

function solution(board, moves) {
    let basket = []; // 바구니
    let lastDoll = 0; // 바구니에서 맨 위에 있는 인형
    let answer = 0; // 사라진 인형 개수
    
    // 각 라인에 인형이 어떻게 쌓여있는지 정리
    let dolls = [];
    for (let num = 0; num < board.length; num++) {
        dolls.push([]);
    }
    board.forEach((line, num) => {
        line.forEach((doll, idx) => {
            if (doll !== 0) {
                dolls[idx].unshift(doll);
            }
        });
    });
    
    // move마다 일어나는 과정
    moves.forEach(move => {
        if (dolls[move-1].length > 0) {
            // 인형을 바구니로 옮긴다
            let moveDoll = dolls[move-1].pop();
            // 같은 모양이 연속해서 쌓였는지 확인
            if (moveDoll === lastDoll) {
                answer += 2;
                basket.pop();
                if (basket.length > 0) {
                    lastDoll = basket[basket.length-1];
                } else {
                    lastDoll = 0;
                }
            } else {
                basket.push(moveDoll);
                lastDoll = moveDoll;
            }
        }
    });
    
    return answer;
}