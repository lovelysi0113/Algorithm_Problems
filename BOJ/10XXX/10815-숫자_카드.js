/**
 * ABOUT
 *
 * DATE: 2021-10-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10815
 *
 * COMMENT:
 * 이분 탐색을 사용하여 해당 숫자 카드가 있는지 확인한다
 * 그런데 시간 초과가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
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
	let card = input[1].split(' ').map(el => parseInt(el));
	let M = parseInt(input[2]);
	let having = input[3].split(' ').map(el => parseInt(el));

	card.sort((a, b) => a - b);

	let answer = having.map(num => {
		let left = 0;
		let right = N - 1;
		let mid = parseInt(right - left);
		let exist = false;
		while (left <= right) {
			let mid = parseInt(right - left);
			if (card[mid] === num) {
				exist = true;
				break;
			} else {
				if (num > card[mid]) {
					left = mid + 1;
				} else {
					right = mid - 1;
				}
			}
		}
		return exist ? 1 : 0;
	});

	console.log(answer.join('\n'));

	process.exit();
});
