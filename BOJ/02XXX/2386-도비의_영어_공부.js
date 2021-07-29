/**
 * ABOUT
 *
 * DATE: 2021-07-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2386
 *
 * COMMENT:
 * 문장에서 문자를 하나씩 검사하며 해당 알파벳과 같은지 확인한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let answer = [];

	input.slice(0, -1).forEach(el => {
		let ch = el[0];

		let count = 0;
		for (let idx = 2; idx < el.length; idx++) {
			if (el[idx].toLowerCase() === ch) {
				count += 1;
			}
		}

		answer.push(`${ch} ${count}`);
	});

	console.log(answer.join('\n'));

	process.exit();
});
