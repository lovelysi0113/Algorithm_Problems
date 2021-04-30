/**
* ABOUT
*
* DATE: 2021-04-30
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2941
*
* COMMENT:
* 입력으로 주어진 단어를 앞에서 부터 2글자나 3글자로 나누어 그게 크로아티아 알파벳인지 확인해본다
* 맞으면 2글자(또는 3글자)를 잘라내고 다음 글자를 확인하는 식으로
* 앞에서부터 차례대로 하나씩 확인해보면 되는 어렵지않은 문제이다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input += line;
})
.on('close', function () {
    const croatia = ['dz=', 'c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];
    
    let answer = 0;
    while (input.length > 0) {
        let chk = input.slice(0, 2);
        if (croatia.includes(chk)) {
            answer += 1;
            input = input.slice(2);
        } else if (input.slice(0, 3) === croatia[0]) {
            answer += 1;
            input = input.slice(3);
        } else {
            answer += 1;
            input = input.slice(1);
        }
    }
    
    console.log(answer);
    
    process.exit();
});