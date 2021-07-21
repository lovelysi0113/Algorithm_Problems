/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2444
 *
 * COMMENT:
 * 별 갯수를 두개씩 늘리고, 공백 갯수는 하나씩 줄여가며 출력한다
 * 그리고 뒤집어서 한번 더 출력해준다
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
	let answer = [];

	let space = '';
	for (let num = 0; num < input; num++) {
		answer.push(space);
		space += ' ';
	}
	answer.reverse();

	let star = '*';
	for (let idx = 0; idx < input; idx++) {
		answer[idx] += star;
		star += '**';
	}

	answer = answer.concat(answer.slice(0, -1).reverse());

	console.log(answer.join('\n'));

	process.exit();
});
