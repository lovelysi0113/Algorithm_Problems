/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2596
 *
 * COMMENT:
 * 숫자를 여섯 개씩 잘라서 해당 숫자랑 대응되는 문자가 있는지 확인한다
 * 만약 없으면 숫자를 하나씩 바꿔보며 바꾼 숫자와 대응되는 문자가 있는지 확인한다
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
	const alpha = {
		'000000': 'A',
		'001111': 'B',
		'010011': 'C',
		'011100': 'D',
		100110: 'E',
		101001: 'F',
		110101: 'G',
		111010: 'H',
	};
	const chg = { 0: '1', 1: '0' };

	let answer = '';

	for (let num = 0; num < parseInt(input[0]); num++) {
		let chk = input[1].slice(num * 6, (num + 1) * 6);
		if (alpha[chk] === undefined) {
			// 여섯 숫자 중 어느 한 숫자만 틀리게 오는 경우
			let isFind = false;
			let idx = 0;
			let correct = '';
			while (idx < 6) {
				correct = chk.slice(0, idx) + chg[chk[idx]] + chk.slice(idx + 1);
				if (alpha[correct] !== undefined) {
					isFind = true;
					break;
				}
				idx += 1;
			}
			if (isFind) {
				answer += alpha[correct];
			} else {
				// 모르는 문자가 있는 경우, 이것이 처음 나오는 위치를 출력
				answer = num + 1;
				break;
			}
		} else {
			answer += alpha[chk];
		}
	}

	console.log(answer);

	process.exit();
});
