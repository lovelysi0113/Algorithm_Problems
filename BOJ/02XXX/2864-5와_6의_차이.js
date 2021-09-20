/**
 * ABOUT
 *
 * DATE: 2021-09-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2864
 *
 * COMMENT:
 * 숫자 한자리씩 확인하며 숫자가 5 또는 6인지 체크한다. 만약 맞다면 최솟값에 5, 최댓값에 6을 넣어서 계산해준다.
 **/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
    input = input.map((num) => {
        let min = [];
        let max = [];

        while (num > 0) {
            let chk = num % 10;
            if (chk === 5 || chk === 6) {
                min.push(5);
                max.push(6);
            } else {
                min.push(chk);
                max.push(chk);
            }
            num = parseInt(num / 10);
        }
        return [
            parseInt(min.reverse().join('')),
            parseInt(max.reverse().join('')),
        ];
    });

    console.log(`${input[0][0] + input[1][0]} ${input[0][1] + input[1][1]}`);

    process.exit();
});
