/**
* ABOUT
*
* DATE: 2021-04-29
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1152
*
* COMMENT:
* split() 메소드를 사용하여 공백을 기준으로 단어를 나누어 배열에 저장해준다
* 이때 앞이나 뒤에 공백이 있는 부분은 ''로 저장되기 때문에
* 단어의 갯수를 셀 때 이 부분('')은 단어의 갯수에 포함하지 않아야 한다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
})
.on('close', function () {
    let answer = 0;
    input.forEach(word => {
        if (word !== ' ' && word != '') {
            answer += 1;
        }
    });
    
    console.log(answer);
    
    process.exit();
});