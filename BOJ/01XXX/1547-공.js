/**
 * ABOUT
 *
 * DATE: 2021-07-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1547
 *
 * COMMENT:
 * 현재 공이 있는 컵이 이동되면 공의 위치를 다른 컵의 번호로 변경해준다
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
	let ball = 1;

	for (let idx = 1; idx < input.length; idx++) {
		let [cup1, cup2] = input[idx].split(' ').map(el => parseInt(el));
		if (ball === cup1) {
			ball = cup2;
		} else if (ball === cup2) {
			ball = cup1;
		}
	}

	console.log(ball);

	process.exit();
});
