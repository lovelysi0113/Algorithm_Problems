/**
 * ABOUT
 *
 * DATE: 2021-10-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1755
 *
 * COMMENT:
 * 숫자 한자리씩 영어로 바꾼 다음 사전순으로 오름차순 정렬하여 10개씩 나누어서 출력한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
	// 숫자를 영어로 읽기
	const readNum = num => {
		const English = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

		let result = [];

		while (num > 0) {
			let chk = num % 10;
			result.push(English[chk]);
			num = parseInt(num / 10);
		}
		return result.reverse().join(' ');
	};

	input.sort((a, b) => a - b);
	let [M, N] = input;
	let changeNum = [];

	for (let num = M; num <= N; num++) {
		changeNum.push([readNum(num), num]);
	}

	// 사전순으로 정렬
	changeNum.sort((a, b) => {
		if (a[0] > b[0]) return 1;
		else return -1;
	});

	// 10개씩 출력
	let idx = 0;
	let answer = [];
	while (idx < changeNum.length) {
		answer.push(
			changeNum
				.slice(idx, idx + 10)
				.map(el => el[1])
				.join(' '),
		);
		idx += 10;
	}

	console.log(answer.join('\n'));

	process.exit();
});
