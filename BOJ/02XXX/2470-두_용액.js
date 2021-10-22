/**
 * ABOUT
 *
 * DATE: 2021-10-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2470
 *
 * COMMENT:
 * 용액들을 오름차순 정렬한 뒤 끝에서부터 두개씩 더해보며 최솟값을 찾는다
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
	let water = input[1].split(' ').map(el => parseInt(el));
	water.sort((a, b) => a - b);

	let left = 0;
	let right = water.length - 1;
	let minSum = Infinity;
	let answer = [-1, -1];

	while (left < right) {
		let sum = water[left] + water[right];
		if (Math.abs(sum) < Math.abs(minSum)) {
			minSum = sum;
			answer = [water[left], water[right]];
		}
		if (sum === 0) {
			break;
		} else if (sum > 0) {
			right -= 1;
		} else {
			left += 1;
		}
	}

	console.log(answer.join(' '));

	process.exit();
});
