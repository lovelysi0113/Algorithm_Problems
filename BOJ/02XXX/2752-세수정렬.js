/**
* ABOUT
*
* DATE: 2021-05-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2752
*
* COMMENT:
* sort() 메소드를 사용하여 오름차순 정렬이 가능하다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(el => parseInt(el));
})
.on('close', function () {
    input.sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else return -1;
    });
    
    console.log(input.join(' '));
    
    process.exit();
});