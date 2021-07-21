/**
 * ABOUT
 *
 * DATE: 2021-07-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1075
 *
 * COMMENT:
 * 맨 뒤 두자리를 00부터 99까지 하나씩 더해보며 F로 나누어지는지 확인해본다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(parseInt(line));
}).on('close', function () {
	let [N, F] = input;
	let front = parseInt(N / 100) * 100;

	let answer = 0;
	while (answer < 100) {
		if ((front + answer) % F === 0) {
			break;
		} else {
			answer += 1;
		}
	}

	if (answer < 10) {
		console.log('0' + answer);
	} else {
		console.log(answer);
	}

	process.exit();
});
