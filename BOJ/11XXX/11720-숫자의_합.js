/**
* ABOUT
*
* DATE: 2021-04-27
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/11720
*
* COMMENT:
* 공백없이 입력된 숫자들은 하나의 문자열로 볼 수 있다
* 따라서 split() 메소드를 사용하여 배열로 만든다음 모든 요소들의 합을 구하면 된다
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
    const total = parseInt(input[0]);
    const nums = input[1].split('');
    let answer = nums.reduce((sum, num) => sum + parseInt(num), 0);
    console.log(answer);
    
    process.exit();
});