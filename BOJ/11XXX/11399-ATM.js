/**
 * ABOUT
 *
 * DATE: 2021-10-31
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/11399
 *
 * COMMENT:
 * 사람들을 오름차순으로 정렬한 후 각자 걸리는 시간들을 더해준다
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
	let N = parseInt(input[0]);
	let people = input[1].split(' ').map(el => parseInt(el));

	// 오름차순으로 정렬
	people.sort((a, b) => a - b);

	// 돈을 인출하는데 필요한 시간의 합
	let total = people.reduce(
		([sum, pre], time) => {
			sum += pre + time;
			pre += time;
			return [sum, pre];
		},
		[0, 0],
	)[0];

	console.log(total);

	process.exit();
});
