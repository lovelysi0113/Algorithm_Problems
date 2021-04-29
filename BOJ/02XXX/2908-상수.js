/**
* ABOUT
*
* DATE: 2021-04-29
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2908
*
* COMMENT:
* 입력받은 수를 split() 메소드를 사용하여 각 자릿수를 배열에 각각 저장해준다
* 백의 자리와 일의 자리를 바꾼다음, 다시 합치면(join()) 상수가 보는 거꾸로 된 숫자가 된다
* 바뀐 두 수를 비교하여 더 큰 수를 출력해주면 된다
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
    let num1 = input[0].split('');
    [ num1[0], num1[2] ] = [ num1[2], num1[0] ];
    num1 = parseInt(num1.join(''))
    let num2 = input[1].split('');
    [ num2[0], num2[2] ] = [ num2[2], num2[0] ];
    
    num2 = parseInt(num2.join(''))
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
    
    process.exit();
});