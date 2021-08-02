/**
 * ABOUT
 *
 * DATE: 2021-08-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/13458
 *
 * COMMENT:
 * 우선 모든 시험장에 총감독관을 배치하고 남은 인원수만큼 부감독관을 배치해준다
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
	let [B, C] = input[2].split(' ').map(el => parseInt(el));
	let rooms = input[1].split(' ').map(el => parseInt(el) - B);

	// 총감독관을 모든 시험장에 배치
	let answer = rooms.length;

	rooms.forEach(student => {
		// 각 시험장마다 부감독관 배치
		if (student > 0) {
			answer += Math.ceil(student / C);
		}
	});

	console.log(answer);

	process.exit();
});
