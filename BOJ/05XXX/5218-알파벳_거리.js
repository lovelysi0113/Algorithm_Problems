/**
 * ABOUT
 *
 * DATE: 2021-07-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5218
 *
 * COMMENT:
 * 글자 하나씩 체크하며 알파벳 거리를 구한다
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
	// 각 알파벳에 숫자 할당
	const numAlpha = ch => {
		return ch.charCodeAt() - 64;
	};

	let answer = [];

	input.slice(1).forEach(el => {
		let [A, B] = el.split(' ');
		let distance = [];
		for (let idx = 0; idx < A.length; idx++) {
			let a = numAlpha(A[idx]);
			let b = numAlpha(B[idx]);
			// y ≥ x인 경우에는 y-x
			// y < x인 경우에는 (y+26) - x
			let dist = b >= a ? b - a : b + 26 - a;
			distance.push(dist);
		}
		answer.push('Distances: ' + distance.join(' '));
	});

	console.log(answer.join('\n'));

	process.exit();
});
