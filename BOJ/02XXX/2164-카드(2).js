/**
 * ABOUT
 *
 * DATE: 2021-06-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2164
 *
 * COMMENT:
 * 문제에서 나온 대로 카드가 1장 남을 때까지 카드를 버리고 옮기는 작업을 반복하면 된다
 * 1. 카드를 버림 -> top 위치를 다음으로 이동
 * 2. 맨 위 카드를 아래로 옮김 -> top 위치의 카드를 push() 메소드로 배열 끝에 추가하고 top 위치를 다음으로 이동
 * 이때 카드를 버리는 작업에서 shift() 메소드 대신 index의 위치로 카드의 맨 위 위치를 표시한 이유는
 * shift() 메소드는 한 번 실행할 때마다 O(N)이 걸리므로 시간 초과가 되기 쉽기 때문이다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
	input = parseInt(line);
}).on('close', function () {
	let card = [];
	// 처음에 카드가 1~N까지 순서대로 놓여져 있음
	// 제일 위에 있는 카드 = card 배열의 인덱스 0에 있는 카드
	for (let num = 1; num <= input; num++) {
		card.push(num);
	}

	// 카드가 한 장 남을 때까지 반복
	let top = 0;
	while (top < card.length - 1) {
		// 제일 위에 있는 카드를 바닥에 버린다
		top += 1;
		// 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다
		card.push(card[top]);
		top += 1;
	}

	console.log(card[top]);

	process.exit();
});
