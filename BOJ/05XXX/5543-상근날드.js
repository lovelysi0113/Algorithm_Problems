/**
 * ABOUT
 *
 * DATE: 2021-06-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5543
 *
 * COMMENT:
 * 주어진 점수를 hamburger(상덕버거, 중덕버거, 하덕버거), drink(콜라, 사이다)의 두그룹으로 나눈 후
 * 각 그룹에서 최솟값을 찾아 더한 후 50월을 빼면 된다
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
	let hamburger = input.slice(0, 3).sort((a, b) => {
		if (a > b) return 1;
		else if (a === b) return 0;
		else return -1;
	});
	let drink = input.slice(3).sort((a, b) => {
		if (a > b) return 1;
		else if (a === b) return 0;
		else return -1;
	});

	let answer = hamburger[0] + drink[0] - 50;
	console.log(answer);

	process.exit();
});
