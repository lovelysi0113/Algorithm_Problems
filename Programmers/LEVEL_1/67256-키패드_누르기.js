/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/67256
*
* COMMENT:
* 문제에 나온 순서대로 한단계씩 코드를 작성하면 된다
**/

function solution(numbers, hand) {
    let answer = '';
    
    let nowLeft = 10 // '*'
    let nowRight = 11 // '#'
    const DISTANCE = [[3, 2, 1, 0], 
                [1, 2, 3, 4], [0, 1, 2, 3], [1, 2, 3, 4],
                [2, 1, 2, 3], [1, 0, 1, 2], [2, 1, 2, 3],
                [3, 2, 1, 2], [2, 1, 0, 1], [3, 2, 1, 2], 
                [4, 3, 2, 1], [4, 3, 2, 1]];
    
    numbers.forEach(number => {
        // 1. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력
        if ([1, 4, 7].includes(number)) {
            answer += 'L';
            nowLeft = number;
        }
        // 2. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력
        if ([3, 6, 9].includes(number)) {
            answer += 'R';
            nowRight = number;
        }
        // 3. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력
        if ([2, 5, 8, 0].includes(number)) {
            let disLeft = DISTANCE[nowLeft][[2, 5, 8, 0].indexOf(number)];
            let disRight = DISTANCE[nowRight][[2, 5, 8, 0].indexOf(number)];
            if (disLeft < disRight) {
                answer += 'L';
                nowLeft = number;
            }
            else if (disLeft > disRight) {
                answer += 'R';
                nowRight = number;
            }
            else if (disLeft === disRight) {
                if (hand === 'left') {
                    answer += 'L';
                    nowLeft = number;
                }
                if (hand === 'right') {
                    answer += 'R';
                    nowRight = number;
                }
            }
        }
    });
    
    return answer;
}