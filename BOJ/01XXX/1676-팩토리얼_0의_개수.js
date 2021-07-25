/**
 * ABOUT
 *
 * DATE: 2021-07-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1676
 *
 * COMMENT:
 * 0의 갯수는 5의 배수가 몇 개 있는지에 따라 결정된다
 * 주어진 숫자에 5의 n승의 배수가 총 몇 개 있는지 세어준다
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

	// 5의 갯수 세기
	for (let five = 5; five <= input; five *= 5) {
		answer += parseInt(input / five);
	}

	console.log(answer);

	process.exit();
});
