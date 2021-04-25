/**
* ABOUT
*
* DATE: 2021-04-25
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10809
*
* COMMENT:
* 각 알파벳이 처음 나온 위치를 저장할 배열(position)을 만든다음
* 입력 단어의 글자를 하나씩 검사하며 그 글자가 처음 나온거면 그 위치를 저장해준다
* 그리고 join() 메소드를 사용하여 배열을 문자열로 출력해준다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input += line;
    input = input.split('');
})
.on('close', function () {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    let position = [];
    for (let idx = 0; idx < ALPHABET.length; idx++) {
        position.push(-1);
    }
    
    input.forEach((el, idx) => {
        let ch = ALPHABET.indexOf(el);
        if (position[ch] === -1) {
            position[ch] = idx;
        }
    });
    
    console.log(position.join(' '));
    
    process.exit();
});