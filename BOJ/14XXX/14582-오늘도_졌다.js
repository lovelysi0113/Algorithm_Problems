/**
 * ABOUT
 *
 * DATE: 2021-10-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/14582
 *
 * COMMENT:
 * 한 회마다 각 팀의 득점수를 비교하여 울림 제미니스가 스타트링크 걸리버스보다 이길때가 있었는지 확인한다
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
	let scores = [0, 0];
	let reversal = false;
	for (let idx = 0; idx < 9; idx++) {
		// 울림 제미니스 득점
		scores[0] += input[0][idx];
		// 득점 비교 - 울림이 스타트링크를 이기고 있을 때가 있었는가?
		if (scores[0] > scores[1]) {
			reversal = true;
			break;
		}
		// 스타트링크 걸리버스 득점
		scores[1] += input[1][idx];
		// 득점 비교 - 울림이 스타트링크를 이기고 있을 때가 있었는가?
		if (scores[0] > scores[1]) {
			reversal = true;
			break;
		}
	}

	if (reversal) {
		console.log('Yes');
	} else {
		console.log('No');
	}

	process.exit();
});
