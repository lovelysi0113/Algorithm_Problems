/**
* ABOUT
*
* DATE: 2021-05-12
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/3009
*
* COMMENT:
* 네번째 점은 세 좌표 중 각 한번씩만 등장한 좌표들의 집합으로 볼 수 있다
* 각 점을 X, Y으로 분리하여 그룹화한 후 한번만 등장한 좌표를 찾는다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(el => parseInt(el)));
})
.on('close', function () {
    let x = input.map(el => el[0]).sort();
    let y = input.map(el => el[1]).sort();
    
    let answer = [];
    if (x[1] === x[0]) {
        answer.push(x[2]);
    } else {
        answer.push(x[0]);
    }
    if (y[1] === y[0]) {
        answer.push(y[2]);
    } else {
        answer.push(y[0]);
    }
    
    console.log(answer.join(' '));
    
    process.exit();
});