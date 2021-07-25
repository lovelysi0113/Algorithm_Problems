/**
 * ABOUT
 *
 * DATE: 2021-07-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/13304
 *
 * COMMENT:
 * 학생들을 그룹으로 나누어 준 후 각 그룹별로 방이 몇개 나올 수 있는지 계산한다
 * 12학년 / 34학년 여학생 / 34학년 남학생 / 56학년 여학생 / 56학년 남학생으로 총 5그룹으로 나눌 수 있다
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
	let [N, K] = input[0];
	let student = { 12: 0, '34M': 0, '34F': 0, '56M': 0, '56F': 0 };

	// 학생들을 그룹으로 나누기
	input.slice(1).forEach(([S, Y]) => {
		if (Y === 1 || Y === 2) student['12'] += 1;
		if (Y === 3 || Y === 4) {
			if (S === 0) student['34F'] += 1;
			if (S === 1) student['34M'] += 1;
		}
		if (Y === 5 || Y === 6) {
			if (S === 0) student['56F'] += 1;
			if (S === 1) student['56M'] += 1;
		}
	});

	// 그룹 별로 방 배정하기
	let answer = Object.keys(student).reduce((sum, group) => {
		return sum + Math.ceil(student[group] / K);
	}, 0);

	console.log(answer);

	process.exit();
});
