/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2445
 *
 * COMMENT:
 * 별 갯수를 한개씩 늘리고, 공백 갯수는 하나씩 줄여가며 출력한다
 * 양쪽으로 공백, 별을 같은 갯수만큼 추가해준다
 * 그리고 뒤집어서 다시 한번 출력해준다
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
	let space = [''];
	let star = ['*'];
	for (let num = 0; num < input - 1; num++) {
		space.push(space[num] + ' ');
		star.push(star[num] + '*');
	}
	space.reverse();
	space = space.concat(space.slice(0, -1).reverse());
	star = star.concat(star.slice(0, -1).reverse());

	let answer = [];
	for (let idx = 0; idx < star.length; idx++) {
		answer.push(star[idx] + space[idx] + space[idx] + star[idx]);
	}

	console.log(answer.join('\n'));

	process.exit();
});
