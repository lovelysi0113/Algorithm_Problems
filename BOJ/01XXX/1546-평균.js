/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1546
*
* COMMENT:
* 입력받은 점수들 중 최댓값을 구한 다음 문제에 나온 새로운 점수 공식(점수/M * 100)으로 원래 점수를 수정한다
* 그리고 새로운 점수들의 평균값을 구하면 된다
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
    let total = parseInt(input[0]);
    let scores = input[1].split(' ').map(el => parseInt(el));
    let maxScore = scores.reduce((max, score) => {
        if (max < score) {
            max = score;
        }
        return max;
    }, 0);
    scores = scores.map(score => score/maxScore * 100);
    let answer = scores.reduce((sum, score) => sum + score, 0);
    
    console.log(answer / total);
    
    process.exit();
});