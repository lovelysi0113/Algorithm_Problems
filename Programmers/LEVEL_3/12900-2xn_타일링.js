/**
* ABOUT
*
* DATE: 2021-04-05
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12900
*
* COMMENT:
* 가로 길이 n을 만드는 방법 = (1) + (2)
* (1) 가로 길이 n-1에 2 x 1 하나 세로로 놓기
*      | ~~~~~~~~~ |    |
*      | ~~~ n-1 ~~~ | +  |
* (2) 가로 길이 n-2에 2 x 1 두개 가로로 놓기
*      | ~~~~~~~~~ |    ㅡㅡ
*      | ~~~ n-2 ~~~ | +  ㅡㅡ
**/

function solution(n) {
    // 가로 길이 n일 때 채울 수 있는 경우의 수를 저장하는 배열
    let tile = [1, 1].concat(new Array(n).fill(0));
    
    for (let idx = 2; idx <= n; idx++) {
        tile[idx] = (tile[idx-1] + tile[idx-2]) % 1000000007;
    }

    return tile[n];
}