/**
 * ABOUT
 *
 * DATE: 2021-10-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/12108
 *
 * COMMENT:
 * 각 과목마다 신청한 사람들의 마일리지를 내림차순 정렬하여 성준이가 해당 과목을 신청할 때 넣어야하는 마일리지를 구한다
 * 그리고 넣어야하는 마일리지들을 오름차순 정렬하고 작은 마일리지를 넣어도 되는 과목들을 추가하면서 과목을 최대로 들을 수 있도록 한다
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
	let [n, m] = input[0].split(' ').map(el => parseInt(el));
	let score = [];

	// 각 과목을 신청할 때 넣어야하는 마일리지
	for (let idx = 1; idx < input.length; idx += 2) {
		let [P, L] = input[idx].split(' ').map(el => parseInt(el));
		let people = input[idx + 1].split(' ').map(el => parseInt(el));
		people.sort((a, b) => b - a);
		if (P >= L) {
			score.push(people[L - 1]);
		} else {
			score.push(1);
		}
	}

	// 최대로 들을 수 있는 과목 개수
	score.sort((a, b) => a - b);
	let total = 0;
	let answer = 0;

	score.forEach(el => {
		if (el + total <= m) {
			total += el;
			answer += 1;
		}
	});

	console.log(answer);

	process.exit();
});
