/**
 * ABOUT
 *
 * DATE: 2021-08-08
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/5533
 *
 * COMMENT:
 * 각 라운드 별로 겹치는 숫자를 정리한 후에 개인이 몇점 얻었는지 계산한다
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
	let people = input.slice(1).map(el => el.split(' ').map(el => parseInt(el)));

	// 라운드 별로 겹치는 숫자 확인
	let unique = [{}, {}, {}];
	people.forEach(el => {
		el.forEach((num, idx) => {
			if (unique[idx][num] === undefined) {
				unique[idx][num] = 0;
			}
			unique[idx][num] += 1;
		});
	});

	// 사람 별로 점수 매기기
	let score = [];
	people.forEach(el => {
		let result = 0;
		el.forEach((num, idx) => {
			if (unique[idx][num] === 1) {
				result += num;
			}
		});
		score.push(result);
	});

	console.log(score.join('\n'));

	process.exit();
});
