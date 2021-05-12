/**
* ABOUT
*
* DATE: 2021-05-12
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2751
*
* COMMENT:
* 수를 하나씩 받아서 배열에 넣은다음, sort해주면 된다(시간 복잡도: O(nlogn))
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
    let num = parseInt(input[0]);
    
    let arr = [];
    for (let idx = 1; idx <= num; idx++) {
        arr.push(parseInt(input[idx]));
    }
    
    arr.sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else return -1;
    });
    
    console.log(arr.join('\n'));
    
    process.exit();
});