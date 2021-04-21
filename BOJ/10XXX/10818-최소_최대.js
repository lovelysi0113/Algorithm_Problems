/**
* ABOUT
*
* DATE: 2021-04-21
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10818
*
* COMMENT:
* 배열 안의 있는 수들을 확인하고 비교하여 최댓값과 최솟값을 찾으면 된다
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
    let nums = input[1].split(' ').map(el => parseInt(el));
    
    let answer = nums.reduce((answer, num) => {
        if (num < answer[0]) {
            answer[0] = num;
        }
        if (num > answer[1]) {
            answer[1] = num;
        }
        return answer;
    }, [nums[0], nums[0]]);
    
    console.log(answer.join(' '));
    
    process.exit();
});