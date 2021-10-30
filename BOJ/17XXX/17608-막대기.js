/**
 * ABOUT
 *
 * DATE: 2021-10-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/17608
 *
 * COMMENT:
 * 오른쪽부터 막대기 하나씩 비교하며 지금까지의 최대 높이보다 현재 높이가 더 큰지 확인해준다
 * 지금까지의 최대 높이 < 현재 높이일 때 현재 막대기는 오른쪽에서 보았을 때 보이는 막대기가 된다
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
	let answer = 1;
	let top = input[input.length - 1];

	for (let idx = input.length - 1; idx > 0; idx--) {
		if (input[idx] > top) {
			answer += 1;
			top = input[idx];
		}
	}

	console.log(answer);

	process.exit();
});
