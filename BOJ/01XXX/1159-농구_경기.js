/**
 * ABOUT
 *
 * DATE: 2021-07-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1159
 *
 * COMMENT:
 * 이름의 첫글자를 확인하여 같은 알파벳끼리 갯수를 세어준다
 * 그리고 갯수가 5 이상인 알파벳을 찾는다
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
	let name = Array(26).fill(0);

	input.slice(1).forEach(person => {
		let ch = person[0].charCodeAt() - 97;
		name[ch] += 1;
	});

	let answer = '';
	for (let idx = 0; idx < 26; idx++) {
		if (name[idx] >= 5) {
			answer += String.fromCharCode(idx + 97);
		}
	}

	if (answer === '') {
		console.log('PREDAJA');
	} else {
		console.log(answer);
	}

	process.exit();
});
