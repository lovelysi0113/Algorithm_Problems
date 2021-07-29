/**
 * ABOUT
 *
 * DATE: 2021-07-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2490
 *
 * COMMENT:
 * 윷짝들의 상태에서 배(0)의 갯수를 세어 결과를 출력해준다
 * 배의 갯수로 도,개,걸,윷,모를 결정할 수 있다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function () {
	let answer = [];

	const result = ['E', 'A', 'B', 'C', 'D'];

	input.forEach(game => {
		let count = game.filter(el => el === 0).length;
		answer.push(result[count]);
	});

	console.log(answer.join('\n'));

	process.exit();
});
