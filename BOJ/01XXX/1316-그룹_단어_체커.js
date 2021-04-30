/**
* ABOUT
*
* DATE: 2021-04-30
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1316
*
* COMMENT:
* 문제에서 정의하는 그룹 단어가 되려면 같은 알파벳이 연속으로 나오는 것은 가능하나 다른 알파벳 이후에 또 나오는 것은 불가능하게 해야한다
* 입력으로 주어진 단어를 한글자씩 확인한다
* 현재 나온 글자가 연속이라면 다음으로 넘어가고
* 만약 새로나온 글자라면 그 글자(알파벳)이 나왔다는 의미로 chkAlphabet에 true로 표시해준다
* 그런데 이미 그 글자가 true라면 전에 한번 등장했다는 의미로 이 단어는 그룹 단어가 될 수 없다
* 이렇게 단어 수만큼 반복하여 이 단어가 그룹 단어인지 확인해주면 된다
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
    let testcase = parseInt(input[0]);
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    let answer = 0;
    
    for (let test = 1; test <= testcase; test++) {
        let chkAlphabet = Array(ALPHABET.length).fill(false);
        // chkAlphabet - 단어에 등장한 알파벳을 true로 변경할 예정
        let isGroup = true;
        let prechr = '';
        for (let idx = 0; idx < input[test].length; idx++) {
            if (input[test][idx] !== prechr) {
                prechr = input[test][idx];
                let pos = ALPHABET.indexOf(prechr);
                if (chkAlphabet[pos]) {
                    // 이미 전에 등장한 알파벳이 다시 나옴 -> 그룹 단어가 될 수 없음
                    isGroup = false;
                    break;
                } else {
                    chkAlphabet[pos] = true;
                }
            }
        }
        if (isGroup) {
            answer += 1;
        }
    }
    
    console.log(answer);
    
    process.exit();
});