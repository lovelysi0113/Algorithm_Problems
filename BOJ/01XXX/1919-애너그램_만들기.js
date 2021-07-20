/**
 * ABOUT
 *
 * DATE: 2021-07-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1919
 *
 * COMMENT:
 * 두 단어를 오름차순으로 정렬한 후 하나씩 비교하여 서로 다른 글자의 갯수를 체크한다
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
	let a = input[0].split('').sort();
	let lenA = a.length;
	let b = input[1].split('').sort();
	let lenB = b.length;

	let answer = 0;
	let idxA = 0;
	let idxB = 0;

	// 알파벳 비교
	while (idxA < lenA && idxB < lenB) {
		if (a[idxA] === b[idxB]) {
			idxA++;
			idxB++;
		} else if (a[idxA] > b[idxB]) {
			idxB++;
			answer += 1;
		} else if (a[idxA] < b[idxB]) {
			idxA++;
			answer += 1;
		}
	}
	// 남은 갯수 체크
	answer += lenA - idxA + (lenB - idxB);

	console.log(answer);

	process.exit();
});
