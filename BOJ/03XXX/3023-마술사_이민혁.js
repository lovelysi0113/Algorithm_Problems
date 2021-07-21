/**
 * ABOUT
 *
 * DATE: 2021-07-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/3023
 *
 * COMMENT:
 * 주어진 디자인을 대칭시켜 전체 카드 디자인을 만든다
 * 그리고 에러 위치를 찾아 그 부분을 변경해준다
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
	let [R, C] = input[0].split(' ').map(el => parseInt(el));

	let card = [];
	// 카드 만들기 - 윗부분
	for (let idx = 1; idx <= R; idx++) {
		let line = input[idx] + input[idx].split('').reverse().join('');
		card.push(line);
	}
	// 카드 만들기 - 아랫부분
	for (let idx = R - 1; idx >= 0; idx--) {
		card.push(card[idx]);
	}

	// 의도된 에러 넣기
	const chg = { '.': '#', '#': '.' };
	let [x, y] = input[R + 1].split(' ').map(el => parseInt(el));
	card[x - 1] = card[x - 1].slice(0, y - 1) + chg[card[x - 1][y - 1]] + card[x - 1].slice(y);

	console.log(card.join('\n'));

	process.exit();
});
