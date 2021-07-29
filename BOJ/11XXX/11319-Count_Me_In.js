/**
 * ABOUT
 *
 * DATE: 2021-07-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11319
 *
 * COMMENT:
 * 문자열을 하나씩 검사하며 해당 문자가 자음인지 모음인지 확인한다
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

	input.slice(1).forEach(str => {
		let ch = [0, 0]; // 0: 자음, 1: 모음

		for (let idx = 0; idx < str.length; idx++) {
			if (str[idx] !== ' ') {
				if ('AEIOUaeiou'.includes(str[idx])) {
					ch[1] += 1;
				} else {
					ch[0] += 1;
				}
			}
		}

		answer.push(ch.join(' '));
	});

	console.log(answer.join('\n'));

	process.exit();
});
