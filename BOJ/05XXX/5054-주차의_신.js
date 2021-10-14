/**
 * ABOUT
 *
 * DATE: 2021-10-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5054
 *
 * COMMENT:
 * 모든 상점을 들리기 위해서는 결국 가장 가까운 상점과 가장 먼 상점 사이의 거리를 두번 다니는 것이다
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

	for (let idx = 2; idx < input.length; idx += 2) {
		let shops = input[idx].split(' ').map(el => parseInt(el));
		shops.sort((a, b) => a - b);
		// 총 이동거리 = 가장 가까운 상점 ~ 가장 먼 상점 사이 거리를 왔다갔다해야 함
		let moving = (shops[shops.length - 1] - shops[0]) * 2;
		answer.push(moving);
	}

	console.log(answer.join('\n'));

	process.exit();
});
