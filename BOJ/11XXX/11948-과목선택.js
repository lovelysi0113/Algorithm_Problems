/**
* ABOUT
*
* DATE: 2021-05-22
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11948
*
* COMMENT:
* 주어진 점수를 science(물리, 화학, 생물, 지구과학), society(역사, 지리)의 두그룹으로 나눈 후
* 각 그룹에서 가장 최소의 점수를 제외한 나머지 점수들의 합을 구하면 된다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
})
.on('close', function () {
    let science = input.slice(0, 4).sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else return -1;
    });
    let society = input.slice(4).sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else return -1;
    });
    
    let answer = science[1] + science[2] + science[3] + society[1];
    console.log(answer);
    
    process.exit();
});