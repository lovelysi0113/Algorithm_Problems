/**
 * ABOUT
 *
 * DATE: 2021-10-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/8979
 *
 * COMMENT:
 * 금메달, 은메달, 동메달 수를 비교하여 내림차순 정렬한다
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

	let ranking = input.slice(1);

	let find = '';
	for (let idx = 0; idx < N; idx++) {
		if (ranking[idx][0] === K) {
			find = ranking[idx].slice(1).join(' ');
			break;
		}
	}

	ranking.sort((a, b) => {
		if (a[1] !== b[1]) {
			return b[1] - a[1];
		} else {
			if (a[2] !== b[2]) {
				return b[2] - a[2];
			} else {
				return b[3] - a[3];
			}
		}
	});

	console.log(ranking.map(el => el.slice(1).join(' ')).indexOf(find) + 1);

	process.exit();
});
