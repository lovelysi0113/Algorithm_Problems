/**
 * ABOUT
 *
 * DATE: 2021-10-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/15963
 *
 * COMMENT:
 * 송찬이가 필요한 베터리와 선생님이 가져온 베터리가 같은지 확인한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
	let [N, M] = input;

	if (N === M) {
		console.log(1);
	} else {
		console.log(0);
	}

	process.exit();
});
