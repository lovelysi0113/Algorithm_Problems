/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2566
 *
 * COMMENT:
 * 9×9 격자판에 쓰여진 81개의 수를 하나씩 검사하며 가장 큰 수를 찾는다
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
	let maxNum = 0;
	let maxPos = [0, 0];

	for (let x = 0; x < 9; x++) {
		for (let y = 0; y < 9; y++) {
			if (input[x][y] > maxNum) {
				maxNum = input[x][y];
				maxPos = [x + 1, y + 1];
			}
		}
	}

	console.log(maxNum);
	console.log(maxPos.join(' '));

	process.exit();
});
