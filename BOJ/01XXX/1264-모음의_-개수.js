/**
 * ABOUT
 *
 * DATE: 2021-07-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1264
 *
 * COMMENT:
 * 문자열을 하나씩 검사하며 해당 문자가 모음인지 확인한다
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
		let result = 0;
		for (let idx = 0; idx < el.length; idx++) {
			if ('aeiouAEIOU'.includes(el[idx])) {
				result += 1;
			}
		}
		answer.push(result);
	});

	console.log(answer.join('\n'));

	process.exit();
});
