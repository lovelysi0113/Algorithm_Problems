/**
* ABOUT
*
* DATE: 2021-05-13
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1037
*
* COMMENT:
* 진짜 약수들을 오름차순으로 정렬한 뒤 최솟값과 최댓값을 곱하면 N이 나온다
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
    let numList = input[1].split(' ').map(el => parseInt(el));
    
    numList.sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else return -1;
    });
    let answer = numList[0] * numList[numList.length-1];
    console.log(answer);
    
    process.exit();
});