/**
 * ABOUT
 *
 * DATE: 2021-07-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1181
 *
 * COMMENT:
 * 문제에 주어진 조건대로 단어들을 정렬한다
 * 이때, 중복되는 단어를 제거하기 위해 Set를 사용하였다
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
	let answer = input.slice(1);

	answer.sort((a, b) => {
		if (a.length !== b.length) {
			// 1. 길이가 짧은 것부터
			return a.length - b.length;
		} else {
			// 2. 길이가 같으면 사전 순으로
			if (a > b) return 1;
			else if (a === b) return 0;
			else return -1;
		}
	});

	// 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력
	console.log(Array.from(new Set(answer)).join('\n'));

	process.exit();
});
