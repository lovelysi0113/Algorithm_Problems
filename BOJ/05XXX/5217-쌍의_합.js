/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5217
 *
 * COMMENT:
 * 합이 n이 되는 두 자연수의 쌍을 찾기 위해 1 ~ n/2까지 하나씩 계산해준다
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
	let answer = [];

	input.slice(1).forEach(num => {
		if (num === 2) {
			answer.push(`Pairs for ${num}:`);
		} else {
			let pair = [];

			for (let chk = 1; chk < num / 2; chk++) {
				pair.push(`${chk} ${num - chk}`);
			}

			answer.push(`Pairs for ${num}: ${pair.join(', ')}`);
		}
	});

	console.log(answer.join('\n'));

	process.exit();
});
