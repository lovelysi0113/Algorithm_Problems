/**
* ABOUT
*
* DATE: 2021-04-18
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2884
*
* COMMENT:
* 45분 앞으로 갔을 때 앞의 시 부분이 바뀌는지 확인하고
* 시 부분이 0시 이전으로 가는지도 확인해주면 된다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(el => Number(el));
})
.on('close', function () {
    let [ h, m ] = input;
    m = m - 45;
    if (m < 0) {
        m = 60 + m;
        h = h - 1;
        if (h < 0) {
            h = 23;
        }
    }
    console.log(`${h} ${m}`);
    
    process.exit();
});