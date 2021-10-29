/**
 * ABOUT
 *
 * DATE: 2021-10-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11651
 *
 * COMMENT:
 * y좌표, x좌표를 오름차순으로 정렬한다
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
	let pos = input.slice(1).map(el => el.split(' ').map(el => parseInt(el)));

	// y좌표, x좌표 오름차순으로 정렬
	pos.sort((a, b) => {
		if (a[1] !== b[1]) return a[1] - b[1];
		else return a[0] - b[0];
	});

	console.log(pos.map(el => el.join(' ')).join('\n'));

	process.exit();
});
