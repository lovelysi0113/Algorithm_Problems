/**
* ABOUT
*
* DATE: 2021-05-28
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1100
*
* COMMENT:
* 체스판은 검정 칸과 하얀 칸이 번갈아가면서 색칠되어 있고 가장 왼쪽 위칸 (0,0)은 하얀색이다
* 문제의 조건을 통해 칸 색과 위치의 연관성을 찾아보면
* 체스판의 칸이 (x, y)일때 x + y가 짝수이면 하얀 칸, 홀수이면 검정 칸임을 알 수 있다
* 따라서 x + y가 짝수이고 'F'인 칸의 갯수를 세면 문제에서 요구하는 답을 구할 수 있다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
})
.on('close', function () {
    let answer = 0;
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if ((x + y) % 2 === 0 && input[x][y] === 'F') {
                answer += 1;
            }
        }
    }
    console.log(answer);
    
    process.exit();
});