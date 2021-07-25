/**
 * ABOUT
 *
 * DATE: 2021-07-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1003
 *
 * COMMENT:
 * 피보나치 수를 구하듯이 피보나치 수를 구할 때 0과 1이 출력되는 수를 구해준다
 * 피보나치 수 num에서 0이 출력되는 갯수 = num-1에서 0이 출력되는 갯수 + num-2에서 0이 출력되는 갯수
 * 피보나치 수 num에서 1이 출력되는 갯수 = num-1에서 1이 출력되는 갯수 + num-2에서 1이 출력되는 갯수
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
	let fibonacci = [
		[1, 0],
		[0, 1],
	];

	let answer = [];

	input.slice(1).forEach(el => {
		if (fibonacci[el] === undefined) {
			for (let num = 2; num <= el; num++) {
				if (fibonacci[num] === undefined) {
					fibonacci[num] = [
						fibonacci[num - 1][0] + fibonacci[num - 2][0],
						fibonacci[num - 1][1] + fibonacci[num - 2][1],
					];
				}
			}
		}
		answer.push(`${fibonacci[el][0]} ${fibonacci[el][1]}`);
	});

	console.log(answer.join('\n'));

	process.exit();
});
