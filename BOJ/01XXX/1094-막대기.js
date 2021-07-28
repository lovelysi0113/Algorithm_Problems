/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1094
 *
 * COMMENT:
 * 문제에서 나온 막대기를 자르는 과정을 보면 계속 절반으로 나누기 때문에
 * 결국 원하는 길이를 2진법으로 바꾼 후 나오는 1의 갯수가 정답이 된다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
	input = parseInt(line);
}).on('close', function () {
	let answer = 0;

	while (input > 0) {
		if (input % 2 !== 0) {
			answer += 1;
		}
		input = Math.floor(input / 2);
	}

	console.log(answer);

	process.exit();
});
